<template>
    <div class="banner-slider-wrapper">
        <carousel  v-if="carouselShow" class="banner-slider  site-carousel"
            :perPage="1"
            :autoplay="true"
            :autoplayTimeout="2000"
            :loop="true"
            scrollPerPage   
            :paginationEnabled="false"  
            :navigationEnabled="true" 
            navigationPrevLabel='<i class="fi flaticon-left-chevron" ></i>'
            navigationNextLabel='<i class="fi flaticon-right-chevron" ></i>'
            > 
            <slide
                class="banner-slide"
                v-for="(slide, index) in slides" :key="index">
                <a href="/listing">
                <banner :data="{ img: slide.img }" ></banner></a>
            </slide> 
        </carousel>
        
    </div>
</template>

<script>
import Glide from '@glidejs/glide'
import banner from './banner'

export default {
    components:{
        banner
    },
    props:{
        slides: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            carouselShow : false,
        }
    },
    mounted(){
        this.carouselShow = true
    }
}
</script>

