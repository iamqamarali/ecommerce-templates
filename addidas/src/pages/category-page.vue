<template>
    <div class="category-page">
        <banner :data="bannerTop" color="white" ></banner>   

        <div class="container">
            <div class=" category-section">
                <a href="" class="category-section-back-link">
                    <i class="fi flaticon-back"></i>
                    Home
                </a>

                <h2 class="title category-section-title ">{{ category.title }}</h2>
                <ul class="nav category-section-nav">
                    <li class="nav-item"
                        v-for="(link, index) in category.links" :key="index">
                        <a :href="link.url" class="nav-link">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
        </div>

         <div class="banner-columns">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <banner :data="banner2" color="black" :centered="true"></banner>                
                </div>
                <div class="col-lg-3 col-md-6">
                    <banner :data="banner3" color="black" :centered="true"></banner>   
                </div>   
                <div class="col-lg-3 col-md-6">
                    <banner :data="banner4" color="black" :centered="true"></banner>   
                </div>   
                <div class="col-lg-3 col-md-6">
                    <banner :data="banner2" color="black" :centered="true"></banner>   
                </div>   
            </div>
        </div>

        <div class="banner-columns">
            <div class="row">
                <div class="col-md">
                    <banner :data="banner5" color="black" :centered="true"></banner>                
                </div>
                <div class="col-md">
                    <banner :data="banner5" color="black" :centered="true"></banner>   
                </div>   
            </div>
        </div>

        <banner :data="banner6" color="white" ></banner>
        <recent-products></recent-products>   

    </div>
</template>

<script>
import banner from '../components/banner'
import recentProducts from '../components/recent-products'
    export default {
        components:{
            banner,
            recentProducts
        },
        data(){
            return {
                category:{
                    title: 'Women',
                    links:[
                        {text: 'shoes' , url:'/listing'},
                        {text: 'tops' , url:'/listing'},
                        {text: 'pants and tights' , url:'/listing'},
                        {text: 'new arrivals' , url:'/listing'},
                        {text: 'best sellers' , url:'/listing'},
                    ]
                },
                bannerTop: {
                    img: '/images/landing-page/banner-4.jpg',
                    title: 'P.O.D.SYSTEM',
                    description: 'P.O.D.SYSTEM embodies the same mantra that helped Paul Pogba succeed: Great alone better together..',
                    ctas:[
                        {text:'shop now' , url:'/listing'},
                        {text:'Explore more' , url:'/listing'}                    
                    ]
                },
                banner2:{
                    img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/October_Women_GLP_Bras_teaser_card_1_480_tcm221-290346.jpg',
                    ctas:[
                        {text:'shop Bras' , url:'/listing'},
                    ]                    
                },
                banner3:{
                    img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/October_Women_GLP_Tops_teaser_card_2_480_tcm221-290349.jpg',
                    ctas:[
                        {text:'shop hoodies' , url:'/listing'},
                    ]                    
                },
                banner4:{
                    img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/October_Women_GLP_Tights_teaser_card_3_480_tcm221-290348.jpg',
                    ctas:[
                        {text:'shop tights' , url:'/listing'},
                    ]                    
                },
                banner5:{
                    img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/BuilttoDefy_TC_MOB_Women_1200x960_tcm221-290345.jpg',
                    title: 'built to defy',
                    ctas:[
                        {text:'shop now' , url:'/listing'},
                    ]                    
                },      
                banner6:{
                    img:'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/HP-TB--1200x1000-_tcm221-291168.jpg',
                    title: 'RUNNING IS IN <br>THE VEINS',
                    description: 'Run fall in the new Ultraboost',
                    ctas:[
                        {text:'shop now' , url:'/listing'},
                    ]                    
                }          
 
            }
        }
    }
</script>
