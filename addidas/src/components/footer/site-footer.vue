<template>
    <div class="site-footer">
        <footer-top></footer-top>
        <footer-middle class="d-none d-lg-block" ></footer-middle>

        <footer-bottom ></footer-bottom>
    </div>
</template>

<script>
import footerTop from './footer-top'
import footerMiddle from './footer-middle'
import footerBottom from './footer-bottom'

export default {
    components:{
        footerTop,
        footerMiddle,
        footerBottom,
    }
    
}
</script>
