<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Vue3 Social Login App Practice"/>
</template>

<script src="https://cdn.jsdelivr.net/npm/fingerprintjs2@2.1.4/dist/fingerprint2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ua-parser-js@0.7.20/src/ua-parser.min.js"></script>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
