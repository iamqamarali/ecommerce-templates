<template>
    <div class="product-images-wrapper">
        <div class="product-images product-images-right">

            <div class="product-current-image-container">
                <img :src="currentImage" class="product-current-image" alt="">
            </div>

            <div class="product-images-items-container" ref="productImagesSlider">
                <div class="product-images-item"
                    v-for="(image, index) in images" :key="index"
                    :class="{'current': currentImage == image}"
                    @mouseover="showAsCurrentImage(image)"
                    @click="showAsCurrentImage(image)"
                    >
                    <img :src="image" class="product-image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { tns } from "tiny-slider/src/tiny-slider"

export default {
    props: ['images'],
    data(){
        return {
            currentImage: this.images[0]
        }
    },
    watch:{
        images(newVal){
            this.currentImage = newVal[0]      
        }
    },
    mounted(){
    },
    methods:{
        showAsCurrentImage(image){
            this.currentImage = image;
        }
    }
}
</script>

