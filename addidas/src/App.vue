<template>
  <div id="app">
    
    <site-header :fixed="true" :fixed-md="true" :message-bar="true" />

    <!--
      <landing-page></landing-page>
      <category-page></category-page>
    -->
      <listing-page></listing-page>

    
    <site-footer></site-footer>
  </div>
</template>

<script>
import landingPage from './pages/landing-page'
import categoryPage from './pages/category-page'
import listingPage from './pages/listing-page'
import siteHeader from './components/header/site-header'
import siteFooter from './components/footer/site-footer'


export default {
  name: 'app',
  components: {
    siteHeader,
    categoryPage,
    landingPage,
    listingPage,
    siteFooter,
  }
}
</script>


<style lang="sass">
@import './assets/sass/app'  

</style>
