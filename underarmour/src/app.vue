<template>
  <div id="app">
    <navbar :fixed="false"></navbar>

    <router-view></router-view>

    <footer-widget></footer-widget>

  </div>
</template>

<script>
import navbar from './components/global/navbar/navbar.vue'
import footerWidget from './components/global/footer'

  export default {
    components:{
      navbar,
      footerWidget,
    }    
  }
</script>

<style lang="sass">
@import './assets/sass/app.sass'

</style>