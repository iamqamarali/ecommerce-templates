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
                {text: 'Exclusive', track: 'exv',products:[
                        {price:'Rs 2800', img:'/images/17933_1.png'},
                        {price:'Rs 3400', img:'/images/15904_1.png'},
                        {price:'Rs 3500', img:'/images/23692_1.png'},
                        {price:'Rs 3200', img:'/images/23692_1.png'},
                        {price:'Rs 3100', img:'/images/16547_1.png'},
                        {price:'Rs 3300', img:'/images/9691_1.png'},
                        {price:'Rs 2800', img:'/images/17933_1.png'},
                        {price:'Rs 3400', img:'/images/15904_1.png'},
                        {price:'Rs 3100', img:'/images/16547_1.png'},

                    ]},
                {text: 'Lingerie', track: 'lingerie',products:[
                        {price:'Rs 2800', img:'/images/16804_1.png'},
                        {price:'Rs 3400', img:'/images/20989_1.png'},
                        {price:'Rs 3500', img:'/images/10263_1.png'},
                        {price:'Rs 3200', img:'/images/18281_1.png'},
                        {price:'Rs 3100', img:'/images/10130_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},
                        {price:'Rs 2800', img:'/images/18376_1.png'},
                        {price:'Rs 3400', img:'/images/16685_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},

                    ]},
                {text: 'Earings', track: 'ear',products:[
                        {price:'Rs 2800', img:'/images/26124_1.png'},
                        {price:'Rs 3400', img:'/images/28038_1.png'},
                        {price:'Rs 3500', img:'/images/28043_1.png'},
                        {price:'Rs 3200', img:'/images/28038_1.png'},
                        {price:'Rs 3100', img:'/images/8188_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},
                        {price:'Rs 2800', img:'/images/13413_1.png'},
                        {price:'Rs 3400', img:'/images/16512_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},

                    ]},
                {text: 'Bangles', track: 'bang',products:[
                        {price:'Rs 2800', img:'/images/17933_1.png'},
                        {price:'Rs 3400', img:'/images/15904_1.png'},
                        {price:'Rs 3500', img:'/images/23692_1.png'},
                        {price:'Rs 3200', img:'/images/23692_1.png'},
                        {price:'Rs 3100', img:'/images/16547_1.png'},
                        {price:'Rs 3300', img:'/images/9691_1.png'},
                        {price:'Rs 2800', img:'/images/17933_1.png'},
                        {price:'Rs 3400', img:'/images/15904_1.png'},
                        {price:'Rs 3100', img:'/images/16547_1.png'},
                    ]},
                {text: 'Anklet', track: 'ank',products:[
                        {price:'Rs 2800', img:'/images/26124_1.png'},
                        {price:'Rs 3400', img:'/images/28038_1.png'},
                        {price:'Rs 3500', img:'/images/28043_1.png'},
                        {price:'Rs 3200', img:'/images/28038_1.png'},
                        {price:'Rs 3100', img:'/images/8188_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},
                        {price:'Rs 2800', img:'/images/13413_1.png'},
                        {price:'Rs 3400', img:'/images/16512_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},
                    ]},
                {text: 'Rings', track: 'rings',products:[
                        {price:'Rs 2800', img:'/images/16804_1.png'},
                        {price:'Rs 3400', img:'/images/20989_1.png'},
                        {price:'Rs 3500', img:'/images/10263_1.png'},
                        {price:'Rs 3200', img:'/images/18281_1.png'},
                        {price:'Rs 3100', img:'/images/10130_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},
                        {price:'Rs 2800', img:'/images/18376_1.png'},
                        {price:'Rs 3400', img:'/images/16685_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},
                    ]},
                {text: 'Lipsticks', track: 'lipsticks',products:[
                        {price:'Rs 2800', img:'/images/26124_1.png'},
                        {price:'Rs 3400', img:'/images/28038_1.png'},
                        {price:'Rs 3500', img:'/images/28043_1.png'},
                        {price:'Rs 3200', img:'/images/28038_1.png'},
                        {price:'Rs 3100', img:'/images/8188_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},
                        {price:'Rs 2800', img:'/images/13413_1.png'},
                        {price:'Rs 3400', img:'/images/16512_1.png'},
                        {price:'Rs 3300', img:'/images/5146_1.png'},
                    ]},
                {text: 'Necklace', track: 'necklace',products:[
                        {price:'Rs 2800', img:'/images/16804_1.png'},
                        {price:'Rs 3400', img:'/images/20989_1.png'},
                        {price:'Rs 3500', img:'/images/10263_1.png'},
                        {price:'Rs 3200', img:'/images/18281_1.png'},
                        {price:'Rs 3100', img:'/images/10130_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},
                        {price:'Rs 2800', img:'/images/18376_1.png'},
                        {price:'Rs 3400', img:'/images/16685_1.png'},
                        {price:'Rs 3300', img:'/images/5669_1.png'},
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

