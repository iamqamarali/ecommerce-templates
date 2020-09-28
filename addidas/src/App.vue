<template>
  <div id="app">
    
    <site-header :fixed="true" :fixed-md="true" :message-bar="true" />

      <router-view></router-view>
    
    <site-footer></site-footer>
  </div>
</template>

<script>
import siteHeader from './components/header/site-header'
import siteFooter from './components/footer/site-footer'


export default {
  name: 'app',
  components: {
    siteHeader,
    siteFooter,
  }
}
</script>


<style lang="sass">
@import './assets/sass/app'  

</style>
