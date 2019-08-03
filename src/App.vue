<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './views/index'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
