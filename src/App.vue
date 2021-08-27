<template>
  <div id="app">
   <router-view></router-view>
   <tarbarmain></tarbarmain>
  </div>
</template>

<script>
import tarbarmain from './components/tarbar/tarbarmain.vue'



export default {
  name: 'App',
  components: {
    tarbarmain
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

</style>
