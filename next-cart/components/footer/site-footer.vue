<template>
    <div class="site-footer">
        <narrow-banner img="/images/abc.jpg"></narrow-banner>

    <!--
        <footer-top></footer-top>
    -->
        <footer-middle class=" d-lg-block" ></footer-middle>
        <footer-bottom ></footer-bottom>
<!--
        <footer-seo-content></footer-seo-content>
-->
    </div>
</template>

<script>
import footerTop from './footer-top'
import footerMiddle from './footer-middle'
import footerBottom from './footer-bottom'
import footerSeoContent from './footer-seo-content'
import narrowBanner from '../banners/narrow-banner'

export default {
    components:{
        footerTop,
        footerMiddle,
        footerBottom,
        footerSeoContent,
        narrowBanner
    }
    
}
</script>
