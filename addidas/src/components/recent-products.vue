<template>
    <div class="section recent-viewed">
        <div class="container">
            <h1 class="recent-viewed-title title text-center mb-3">recently viewed items</h1>
            <products-slider :products="recentlyViewed" ></products-slider>
        </div>            
    </div>
</template>

<script>
import productsSlider from './products-slider' 
    export default {
        components:{
            productsSlider
        },
        data(){
            return {
                recentlyViewed:[
                    {
                        img : '/images/product/product-img.jpg',
                        category: 'Performance',
                        title: 'pureboost GO shoes',
                        price: '$120',
                    },
                    {
                        img : '/images/product/product-img.jpg',
                        category: 'Performance',
                        title: 'pureboost GO shoes',
                        price: '$120',
                    }                
                ]
            }
        }
    }
</script>

