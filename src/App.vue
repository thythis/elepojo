<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html {
    height: 100%;
  }
  body, #app {
    margin: 0;
    height: 100%;
  }
</style>
