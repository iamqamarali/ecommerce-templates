<template>
  <div id="app">
    <navbar :fixed="false"></navbar>

    <!--
      <listing></listing>
    -->
      <landing-page></landing-page>

    <!--
    <single-product></single-product>
    <category-shop></category-shop>
    -->
    

    <footer-widget></footer-widget>

  </div>
</template>

<script>
import navbar from './components/global/navbar/navbar.vue'
import landingPage from './pages/landing-page'
import footerWidget from './components/global/footer'
import listing from './pages/listing'
import singleProduct from './pages/single-product'
import categoryShop from './pages/category-shop'

  export default {
    components:{
      navbar,
      landingPage,
      listing,
      footerWidget,
      singleProduct,
      categoryShop
    }    
  }
</script>

<style lang="sass">
@import './assets/sass/app.sass'

</style>