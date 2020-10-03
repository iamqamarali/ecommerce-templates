<template>
    <div class="you-may-also-like">
        <div class="container-fluid">

            <!--<ul class="nav you-may-also-like-nav"   ref="nav">
                <li class="nav-item"
                v-for="(navItem, index) in nav" :key="index"
                >
                    <span class="nav-link" 
                    :class="{ active : selected_nav == navItem }"
                    @click.prevent="selected_nav = navItem"
                    >
                        {{ navItem.text }}
                    </span>
                </li>
            </ul>

            <ul class="nav you-may-also-like-nav is-fixed-top d-none" :class="{ 'd-flex' : showFixed }" >
                <li class="nav-item"
                v-for="(navItem, index) in nav" :key="index"
                >
                    <span class="nav-link" 
                    :class="{ active : selected_nav == navItem }"
                    @click.prevent="selected_nav = navItem"
                    >
                        {{ navItem.text }}
                    </span>
                </li>
            </ul>-->

            <div class="category-slider-menu-wrapper d-md-none">
                <ul class="nav you-may-also-like-nav is-fixed-top d-none" :class="{ 'd-flex' : showFixed }">
                    <li class="nav-item  menu-item"
                        v-for="(navItem, index) in nav" :key="index">

                        <span  class="nav-link" :class="{ active : selected_nav == navItem }"
                               @click.prevent="selected_nav = navItem">
                            <div class="menu-item-text"> {{ navItem.text }}</div>
                        </span>

                    </li>
                </ul>
            </div>
            <div class="category-slider-menu-wrapper">
                <ul class="nav category-slider-menu you-may-also-like-nav" ref="nav">
                    <li class="nav-item  menu-item"
                        v-for="(navItem, index) in nav" :key="index">

                            <span  class="nav-link" :class="{ active : selected_nav == navItem }"
                                @click.prevent="selected_nav = navItem">
                                <div class="menu-item-text"> {{ navItem.text }}</div>
                            </span>                        
                    </li>
                </ul>
            </div>


            <div class="you-may-also-like-products hidden_block" :class="{ show_block : selected_nav == navItem}" v-for="(navItem, index) in nav" :key="index" :id="navItem.track">
                <div class="row no-gutters">
                    <div class="col-4 col-lg-3"
                    v-for="(p, index) in navItem.products" :key="index">

                            <nuxt-link to="/single-product">
                                <div class="you-may-also-like-product card product-card">
                                    <div class="product-img-container">

                                        <img :src="p.img" alt="" class="product-img img-fluid">
                                    </div>
                                    <div class="product-detail-container">
                                        <div style="margin-bottom: 10px">
                                            <div class="price-box">


                                                <span class="product-price-now">{{ p.price }}</span>
                                                <span class="product-original-price text-danger text-line-through mr-2">
                                                {{ p.price }}
                                            </span>
                                            </div>
                                            <a href="#" class="product-heart-icon heart-icon"><i class="fi fi-8x flaticon-like"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </nuxt-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showFixed: false,

            nav:[
                {text: 'Earrings', track: 'exv' ,products:[
                        {price:'Rs 2800', img:'/images/products/earings/25870_1-1472851574074.jpg'},
                        {price:'Rs 3400', img:'/images/products/earings/25954_1-1462041876722.jpg'},
                        {price:'Rs 3500', img:'/images/products/earings/28039_1-21576970272.jpeg'},
                        {price:'Rs 3200', img:'/images/products/earings/28641_1-1125466284039.jpg'},
                        {price:'Rs 3100', img:'/images/products/earings/29930_1-28666722410.jpg'},
                        {price:'Rs 3300', img:'/images/products/earings/30922_1-973282246120.jpg'},
                        {price:'Rs 2800', img:'/images/products/earings/30926_1-105607038367.jpg'},
                        {price:'Rs 3400', img:'/images/products/earings/32072_1-963291324860.jpg'},
                        {price:'Rs 3100', img:'/images/products/earings/32075_1-256085531119.jpg'},

                    ]},
                {text: 'Rings', track: 'rings' ,products:[
                        {price:'Rs 2800', img:'/images/products/rings/3549_1-117952890620.jpg'},
                        {price:'Rs 3400', img:'/images/products/rings/3553_1-105045662764.jpg'},
                        {price:'Rs 3500', img:'/images/products/rings/4658_1-1228083166493.jpeg'},
                        {price:'Rs 3200', img:'/images/products/rings/9334_1-30855318660.jpeg'},
                        {price:'Rs 3100', img:'/images/products/rings/13174_1-1274076240111.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/15255_1-310713987831.jpeg'},
                        {price:'Rs 2800', img:'/images/products/rings/15602_1-425385663421.jpeg'},
                        {price:'Rs 3400', img:'/images/products/rings/25992_1-922366085107.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/28726_1-537758151716.jpg'},
                        {price:'Rs 1300', img:'/images/products/rings/31867_1-1429071723946.jpg'},
                        {price:'Rs 1500', img:'/images/products/rings/32104_1-988992048421.jpg'},

                    ]},
                {text: 'Bracelets', track: 'brace',products:[
                        {price:'Rs 3400', img:'/images/products/bracelets/13571_1-46194436577.jpeg'},
                        {price:'Rs 2800', img:'/images/products/bracelets/19093_1-708067781887.jpeg'},
                        {price:'Rs 3500', img:'/images/products/bracelets/26909_1-659831029786 (1).jpg'},
                        {price:'Rs 3200', img:'/images/products/bracelets/26909_1-659831029786.jpg'},
                        {price:'Rs 3100', img:'/images/products/bracelets/27084_1-1098539057723.jpg'},
                        {price:'Rs 3300', img:'/images/products/bracelets/28559_1-1096278500279.jpg'},
                        {price:'Rs 2800', img:'/images/products/bracelets/28558_1-357376430330.jpg'},
                        {price:'Rs 3400', img:'/images/products/bracelets/28692_1-656233348952.jpg'},
                        {price:'Rs 3300', img:'/images/products/bracelets/31977_1-991885681720.jpg'},
                    ]},
                {text: 'Rings', track: 'rings' ,products:[
                        {price:'Rs 2800', img:'/images/products/rings/3549_1-117952890620.jpg'},
                        {price:'Rs 3400', img:'/images/products/rings/3553_1-105045662764.jpg'},
                        {price:'Rs 3500', img:'/images/products/rings/4658_1-1228083166493.jpeg'},
                        {price:'Rs 3200', img:'/images/products/rings/9334_1-30855318660.jpeg'},
                        {price:'Rs 3100', img:'/images/products/rings/13174_1-1274076240111.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/15255_1-310713987831.jpeg'},
                        {price:'Rs 2800', img:'/images/products/rings/15602_1-425385663421.jpeg'},
                        {price:'Rs 3400', img:'/images/products/rings/25992_1-922366085107.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/28726_1-537758151716.jpg'},
                        {price:'Rs 1300', img:'/images/products/rings/31867_1-1429071723946.jpg'},
                        {price:'Rs 1500', img:'/images/products/rings/32104_1-988992048421.jpg'},

                    ]},
                {text: 'Earrings', track: 'exv' ,products:[
                        {price:'Rs 2800', img:'/images/products/earings/25870_1-1472851574074.jpg'},
                        {price:'Rs 3400', img:'/images/products/earings/25954_1-1462041876722.jpg'},
                        {price:'Rs 3500', img:'/images/products/earings/28039_1-21576970272.jpeg'},
                        {price:'Rs 3200', img:'/images/products/earings/28641_1-1125466284039.jpg'},
                        {price:'Rs 3100', img:'/images/products/earings/29930_1-28666722410.jpg'},
                        {price:'Rs 3300', img:'/images/products/earings/30922_1-973282246120.jpg'},
                        {price:'Rs 2800', img:'/images/products/earings/30926_1-105607038367.jpg'},
                        {price:'Rs 3400', img:'/images/products/earings/32072_1-963291324860.jpg'},
                        {price:'Rs 3100', img:'/images/products/earings/32075_1-256085531119.jpg'},

                    ]},                    
                {text: 'Bracelets', track: 'brace',products:[
                        {price:'Rs 3400', img:'/images/products/bracelets/13571_1-46194436577.jpeg'},
                        {price:'Rs 2800', img:'/images/products/bracelets/19093_1-708067781887.jpeg'},
                        {price:'Rs 3500', img:'/images/products/bracelets/26909_1-659831029786 (1).jpg'},
                        {price:'Rs 3200', img:'/images/products/bracelets/26909_1-659831029786.jpg'},
                        {price:'Rs 3100', img:'/images/products/bracelets/27084_1-1098539057723.jpg'},
                        {price:'Rs 3300', img:'/images/products/bracelets/28559_1-1096278500279.jpg'},
                        {price:'Rs 2800', img:'/images/products/bracelets/28558_1-357376430330.jpg'},
                        {price:'Rs 3400', img:'/images/products/bracelets/28692_1-656233348952.jpg'},
                        {price:'Rs 3300', img:'/images/products/bracelets/31977_1-991885681720.jpg'},
                    ]},
                {text: 'Rings', track: 'rings' ,products:[
                        {price:'Rs 2800', img:'/images/products/rings/3549_1-117952890620.jpg'},
                        {price:'Rs 3400', img:'/images/products/rings/3553_1-105045662764.jpg'},
                        {price:'Rs 3500', img:'/images/products/rings/4658_1-1228083166493.jpeg'},
                        {price:'Rs 3200', img:'/images/products/rings/9334_1-30855318660.jpeg'},
                        {price:'Rs 3100', img:'/images/products/rings/13174_1-1274076240111.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/15255_1-310713987831.jpeg'},
                        {price:'Rs 2800', img:'/images/products/rings/15602_1-425385663421.jpeg'},
                        {price:'Rs 3400', img:'/images/products/rings/25992_1-922366085107.jpg'},
                        {price:'Rs 3300', img:'/images/products/rings/28726_1-537758151716.jpg'},
                        {price:'Rs 1300', img:'/images/products/rings/31867_1-1429071723946.jpg'},
                        {price:'Rs 1500', img:'/images/products/rings/32104_1-988992048421.jpg'},

                    ]},
            ],

            selected_nav: null,
        }
    },
    created(){
        this.selected_nav = this.nav[0]
    },
    mounted(){
        window.addEventListener('scroll', this.handleScrollEvent)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScrollEvent)
    },
    computed:{
        products(){
            //if(this.selected_nav.track)
             //do some api call

            this.selected_nav.track

            let products = [
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
                {price:'US $8.00', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q1B34j8TygN9ElU8SjVCnJaD3Px4wph7Y1C4wSPv4yVwuEne'},
            ]
            return products
        }
    },


    methods:{
        handleScrollEvent(e){
            if(window.scrollY >= ( this.$refs.nav.offsetTop - 100 )){
                this.showFixed = true
            }
            else
                this.showFixed = false
        }
    }
}
</script>

