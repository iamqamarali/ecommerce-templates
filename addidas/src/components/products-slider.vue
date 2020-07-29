<template>
    <div class="products-slider-wrapper">
        <div class="products-slider" ref="productSlider">
            <product
                v-for="(product, index) in products" :key="index"
                :product="product"
                >
            </product>
        </div>
    </div>
</template>

<script>
import product from './product'
import { tns } from 'tiny-slider/src/tiny-slider'

export default {
    props: ['products'],
    components:{
        product
    },
    mounted(){
        var slider = tns({
            container: this.$refs.productSlider,
            controlsText: ['<' ,'>'],
            loop: false,
            responsive:{
                0: {
                    gutter: 10,
                    items: 2
                },
                768: {
                    items: 3,
                    gutter: 10
                },
                992: {
                    items: 4,
                    gutter: 10
                }
            }
            // nextButton : this.$refs.btnLeft,
            // prevButton : this.$refs.btnRight            
        });
    }
}
</script>
