<template>
    <div class="home">

        <div class="pt-0">
            <banner :data="banner" color="white"></banner>
        </div>
        <div class="container-fluid  ">
            <category-slider 
                :heading="category_slider.heading"
                :menu-items="category_slider.menuItems"
            />
        </div>
        <banner-slider :slides="bannerSlides"></banner-slider>
       
       <!-- <div class="container-fluid">

                <category-slider 
                    :heading="categories.women.heading"
                    :menu-items="categories.women.menuItems"
                />    
                
                <category-slider 
                    :heading="categories.men.heading"
                    :menu-items="categories.men.menuItems"
                />                    
        </div>-->



        <!--<div class="container-fluid">
            <banners-grid :images="gridImages"></banners-grid>
        </div>-->

        <!--<div class="banner-columns">
            <div class="row">
                <div class="col-md">
                    <banner :data="banner1" color="white" :centered="true"></banner>
                </div>
                <div class="col-md">
                    <banner :data="banner2" color="white" :centered="true"></banner>
                </div>
                <div class="col-md">
                    <banner :data="banner3" color="white" :centered="true"></banner>
                </div>
            </div>
        </div>-->

    <you-may-also-like class=""></you-may-also-like>

    </div>
</template>

<script>
import bannerSlider from '@/components/banners/banner-slider'
import categorySlider from '@/components/category-slider'
import bannersGrid from '@/components/banners/banners-grid'
import banner from '@/components/banners/banner'
import youMayAlsoLike from '@/components/you-may-also-like'


export default {
    components: {
        bannerSlider,
        categorySlider,
        bannersGrid,
        banner,
        youMayAlsoLike
    },
    data(){
        return {
            bannerSlides:[
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-1.jpg'},
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-2.jpg'},
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-3.jpg'},
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-4.jpg'},
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-5.jpg'},
                { img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-Banner-6.jpg'},
            ],

            category_slider:{
                heading: 'Shop By Category',
                menuItems:[
                    { text: "Rings" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                    { text: "Earings" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-02.png' },
                    { text: "Necklace" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-03.png' },
                    { text: "Rings" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-04.png' },
                    { text: "Necklace" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-05.png' },
                    { text: "Rings" , href: '/mens', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                    { text: "Men's" , href: '/mens', img: 'https://images1.voonik.com/campaigns/M_S_Slot_02.jpg' },
                    { text: "Women's" , href: '/mens', img: 'https://images1.voonik.com/campaigns/women.jpg' },
                    { text: "Kids's" , href: '/mens', img: 'https://images1.voonik.com/campaigns/kids_1.jpg' },

                ]
            },

            categories:{
                women: {
                    heading: 'Shop for women',
                    menuItems:[
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                        { text: 'Earings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-02.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-03.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-04.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-05.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                        { text: 'Earings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-02.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-03.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-04.png' },
                    ]
                },
                men: {
                    heading: 'SHOP FOR Men',
                    menuItems:[
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                        { text: 'Earings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-02.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-03.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-04.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-05.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-01.png' },
                        { text: 'Earings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-02.png' },
                        { text: 'Necklace', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-03.png' },
                        { text: 'Rings', href:'/sarees', img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/icon-04.png' },
                    ]
                },                
            },

            gridImages:[
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/twins.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/om-haridaya-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/alphabet-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/sway-with-me-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/Amalia-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/shakuntalam-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/trio-stmap.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/grecia.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/mesmerizing-stamp.jpg'},
                { href: '/collection-abc', src: 'https://cf-cdn.aucent.com/public/uploads/editor-images/Home/collections-home/celestia-stamp.jpg'},
            ],


            banner:{
                title: "",
                img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-1.jpg',
                ctas:[
                    { href: '/shop-newest-jewellery', text: "Shop What's New" }
                ]
            },
            banner1:{
                title: "Newes't Jewellery",
                img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-Banner-2.jpg',
                ctas:[
                    { href: '/shop-newest-jewellery', text: "Shop What's New" }
                ]
            },
            banner2:{
                title: "Newes't Jewellery",
                img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-Banner-2.jpg',
                ctas:[
                    { href: '/shop-newest-jewellery', text: "Shop What's New" }
                ]
            },
            banner3:{
                title: "Newes't Jewellery",
                img: 'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/main-Banner-2.jpg',
                ctas:[
                    { href: '/shop-newest-jewellery', text: "Shop What's New" }
                ]
            }

        }
    }
}
</script>

