<template>
    <div class="category-shop">
        <div class="category-slider-wrapper">
                <div class="category-slider" ref="categorySlider">
                    
                    <div class="category-slider-item"
                        v-for="(slide, index) in category.slides" :key="index"
                        > 
                        <img :src="slide.image" class="category-slider-item-image" alt="">

                        <div class="category-slider-info"
                            :class="slide.info.color">
                            <h5 class="category-slider-info-subtitle secondry-font"  v-html="slide.info.subtitle" > </h5>
                            <h2 class="category-slider-info-title secondry-font" v-html="slide.info.title" ></h2>
                            <p class="category-slider-info-description" v-html="slide.info.description" ></p>
                            <a :href="slide.link" class="btn btn-white category-slider-shop-btn">SHOP NOW</a>
                        </div>
                        
                    </div>
                </div><!-- category-slider -->

            <div class="category-shop-nav-container">                
                <h5 class="category-shop-title secondry-font">{{ category.title }}</h5>
                <ul class="nav category-shop-nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">New Arrivals</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">Tops</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">Bottoms</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">Footwear</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">Accessories</a>
                    </li>
                    <li class="nav-item">
                        <a :href="'/some-url/'+category.id" class="nav-link">All Women's</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <new-arrivals :arrivals="arrivals" ></new-arrivals>
        <collections-two-column :collections="twoColumnData"/>
        <collections-three-column class="d-none d-md-block" :collections="threeColumnData"/>


        <other-link-columns :links="otherLinks" class="d-none d-md-block" ></other-link-columns>

    </div>
</template>

<script>
import newArrivals from '../components/global/new-arrivals'
import collectionsTwoColumn from '../components/global/collections-two-column'
import collectionsThreeColumn from '../components/global/collections-three-column'
import otherLinkColumns from '../components/global/other-link-columns'

import { tns } from "tiny-slider/src/tiny-slider"

export default {

    components:{
        newArrivals,
        collectionsTwoColumn,
        collectionsThreeColumn,
        otherLinkColumns
    },
    data(){
        return {
            twoColumnData:[
                {
                    title :'Ua sportstyle',
                    description : 'Wired different. Ready to take over.',
                    img : '/images/category-shop/shop-two-column1.jpg',
                    link : '/CURRY+5'
                },
                {
                    title :'Unstoppable collection',
                    description : 'Wired different. Ready to take over.',
                    img : '/images/category-shop/shop-two-column2.jpg',
                    link : '/CURRY+5'
                },
            ],
            threeColumnData:[
                {
                    img : '/images/category-shop/shop-three-column-1.jpg',
                    link : '/CURRY+5',
                    linkText: 'Shop speedpocket'
                },
                {
                    img : '/images/category-shop/shop-three-column-2.jpg',
                    link : '/CURRY+5',
                    linkText: 'Shop UA HOVER'
                },
                {
                    img : '/images/category-shop/shop-three-column-3.jpg',
                    link : '/CURRY+5',
                    linkText: 'SHOP ATHLETE'
                },
            ],
            arrivals:[
                {
                    link :'/shopnow',
                    text : 'Shop Now'
                },
            ],
            category:{
                id: 12341,
                title: 'WOmen',
                slides:[
                    {
                        image: '/images/category-shop/category-slider-1.jpeg',
                        info:{
                            subtitle: 'UA FAvourite',
                            title: 'BE RELAXED',
                            description: 'Ultra-light performance cotton feels laid back, not lazy',
                            color: 'black', // white , black
                        },
                        link : '/shop/something'
                    },
                    {
                        image: '/images/category-shop/category-slider-2.jpeg',
                        info:{
                            subtitle: 'UA FAvourite',
                            title: 'Classic Training <br> With A Twist',
                            description: 'Ultra-light performance cotton feels laid back, not lazy',
                            color: 'black', // white , black
                        },
                        link : '/shop/something'
                    },
                    {
                        image: '/images/category-shop/category-slider-3.jpeg',
                        info:{
                            subtitle: 'UA FAvourite',
                            title: 'The Edge of feminity',
                            description: 'Ultra-light performance cotton feels laid back, not lazy',
                            color: 'white', // white , black
                        },
                        link : '/shop/something'
                    },
                ]
            },

            otherLinks:[
                {
                    title: 'GEAR',
                    links: [
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                    ],
                },
                {
                    title: 'GEAR',
                    links: [
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                    ],
                },
                {
                    title: 'GEAR',
                    links: [
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                    ],
                },
                {
                    title: 'GEAR',
                    links: [
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                        { text:'Hoodies', url :'asd' },
                    ],
                },
            ]
        }
    },

    mounted(){
        let slider = tns({
            container: this.$refs.categorySlider,
            item: 1,
            loop: true,
            mode: 'gallery',
            autoplay: true,
            controls: false,
            autoplayTimeout: 5000,
            autoplayButtonOutput: false,
        });
    }     
}
</script>

<style>
.tns-fadeIn, .tns-fadeOut{
    transition: all .5s ease!important
}
.tns-fadeIn{
    opacity: 1!important;
}

.tns-fadeOut{
    opacity: 0!important;
}
</style>


