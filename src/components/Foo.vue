<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo</h1>
    <p>Componen12232t</p>
  </div>
</template>

<script>
export default {
  methods: {
    onHandleClick() {
      alert('foo');
    }
  },
}
</script>

<style lang="scss">
.foo {
  background: yellowgreen;
}
</style>
