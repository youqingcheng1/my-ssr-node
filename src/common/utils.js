/**
 * 获取url参数的值
 * @param {String} key url的参数
 */
export function queryURLParam(key) {
  let val = new RegExp('[?&]' + key + '=([^&]*)(&?)', 'i').exec(
    window.location.href
  );
  return val ? val[1] : val;
}