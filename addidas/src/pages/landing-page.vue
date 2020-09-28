<template>
    <div id="landing-page">

        <banner :data="bannerTop" color="white"></banner>

        <div class="banner-columns">
            <div class="row">
                <div class="col-md">
                    <banner :data="banner2" color="black" :centered="true"></banner>                
                </div>
                <div class="col-md">
                    <banner :data="banner3" color="black" :centered="true"></banner>   
                </div>   
            </div>
        </div>

        <banner :data="banner4" color="white"></banner>

        <div class="banner-columns">
            <div class="row">
                <div class="col-md">
                    <banner :data="banner2" color="black" :centered="true"></banner>                
                </div>
                <div class="col-md">
                    <banner :data="banner3" color="black" :centered="true"></banner>   
                </div>   
            </div>
        </div>

        <div class="section trending">
            <div class="container">
                <h3 class="trending-title title text-center">What's trending</h3>
                <products-slider :products="trendingProducts" ></products-slider>
            </div>
        </div>

        <recent-products></recent-products>

    </div>
</template>

<script>
import banner from '../components/banner'
import productsSlider from '../components/products-slider'
import recentProducts from '../components/recent-products'

export default {
    components:{
        banner,
        productsSlider,
        recentProducts
    },
    data(){
        return {
            bannerTop: {
                img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/HardenVOL3-mashead2-TB_tcm221-294164.jpg',
                title: 'Harden VOL.3',
                subtitle: 'Slow DOWN FAST',
                ctas:[
                    {text:'shop now' , url:'/category'},
                    {text:'shop harden collection' , url:'/category'}                    
                ]
            },
            banner2: {
                img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/alphaskin_dame_mobile_tcm221-294707.jpg',
                title: 'alphaskin',
                ctas:[
                    {text:'shop now' , url:'/category'}
                ]
            },
            banner3: {
                img: 'https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/NextWave_Madbounce_Featurecard_2_1200x960_tcm221-285556.jpg',
                title: 'pro bounce',
                ctas:[
                    {text:'shop now' , url:'/category'}
                ]
            },
            banner4: {
                img: '/images/landing-page/banner-4.jpg',
                title: 'A PRODUCT OF HERITAGE',
                subtitle: 'Fusing archival designs with modern technology.',
                ctas:[
                    {text:'shop now' , url:'/category'},
                    {text:'shop men' , url:'/category'}                    
                ]
            },
            trendingProducts:[
                {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },   
                 {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },    {
                    img : '/images/product/product-img.jpg',
                    category: 'Performance',
                    title: 'pureboost GO shoes',
                    price: '$120',
                    review_count : 480
                },                
            ],

        }
    }
}
</script>
