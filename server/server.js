const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const backendApp = new Koa();
const backendRouter = new Router();

const isProd = process.env.NODE_ENV === 'production';
const createRenderer = (bundle, options) => createBundleRenderer(bundle, Object.assign(options, {
  runInNewContext: false
}));

let baseRender = (renderer,ctx,next)=>{
  let context = {
      url:ctx.url,
      title:'时间戳',
      keywords:'尤钦程',
      description:'个人博客'
  };

  const ssrStream = renderer.renderToStream(context);
  
    ctx.status = 200;
    ctx.type = 'html';
    ctx.body = ssrStream;
}

let render ;

if(isProd){
  const bundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')
  let renderer = createRenderer(bundle,{
      template:  template,
      clientManifest
  })
  render = (ctx,next) =>{
      baseRender(renderer,ctx,next)
  }
}else{
  const setupDevServer = require('../config/setup-dev-server');
  var renderer;
  var promise = setupDevServer(backendApp,path.resolve(__dirname, '../dist/index.ssr.html'),(bundle,options)=>{
      console.log('bundle callback..');
      renderer = createRenderer(bundle,options)
  })
  render = (ctx,next)=>{
      promise.then(() => baseRender(renderer, ctx,next));
  }
}

backendRouter.get('*', async (ctx,next)=>{
  render(ctx,next)
});

backendApp.use(serve(path.resolve(__dirname, '../dist')));

backendApp
.use(backendRouter.routes())
.use(backendRouter.allowedMethods());


backendApp.listen(5000, () => {
  console.log('服务器端渲染地址： http://localhost:5000');
});