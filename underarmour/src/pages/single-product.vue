<template>
    <div class="single-product-wrapper">
        <div class="single-product mt-3 mt-sm-0">
            <div class="container-fluid ">

                <div class="product-preview-container  bg-light">
                    <a :href="data.backLink" class="product-back-link">{{ data.backText }}</a>
                    <product-preview :product="data.product" ></product-preview>
                </div>
            

                <div class="product-description">
                    <div class="row">
                        <div class="col-md-8 py-3">
                            <div class="product-dna">
                                <h5 class="product-dna-heading title-small">Product DNA</h5>
                                <div class="product-dna-description">
                                    <!--  
                                        {{data.product.dna}}
                                        Replace this data with dynamic data 
                                    -->
                                    <ul>
                                        <li><strong>Fitted:</strong> Next-to-skin without the squeeze.</li>
                                        <li>UA Microthread technology in the fabric dries faster, won’t cling to you, won’t chafe & stretches without absorbing sweat</li>
                                        <li>Ergonomic design keeps seams off high abrasion areas & increases durability</li>
                                        <li>Mesh underarm panels for strategic ventilation</li>
                                        <li>4-way stretch construction moves better in every direction</li>
                                        <li>Material wicks sweat & dries really fast</li>
                                        <li>Anti-odor technology prevents the growth of odor-causing microbes</li>
                                        <li>Shaped hem</li>
                                        <li>Sublimated graphic</li>
                                        <li>64% Polyester/36% Elasterell</li>
                                        <li>Imported</li>
                                    </ul>
                                    <div class="links">
                                        <a href="">Shop all Men's Short Sleeve Shirts</a>
                                        <a href="">How would you rate our product descriptions & photos?</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                            
                        <div class="col-md-4 py-3">
                            <size-chart :sizes="data.sizeChartData" id="size-chart"></size-chart>
                        </div>
                    </div>
                </div>

                <div class="product-share mb-4">
                    <button class="btn ">
                        <i class="flaticon flaticon-share mr-2"></i>
                        <span>SHARE</span>
                         <span class="product-share-icons">
                            <i class="flaticon flaticon-close-envelope"></i>
                            <i class="flaticon flaticon-pinterest"></i>
                            <i class="flaticon flaticon-twitter"></i>
                            <i class="flaticon flaticon-facebook-letter-logo"></i>
                        </span>
                    </button>                   
                </div>


                <!-- other products sliders -->
                <div class="other-products-wrapper">
                    <div class="tabs-wrapper">
                        <ul class="tabs nav nav-tabs justify-content-center">
                            <li class="tab-title nav-item" >
                                <a href="" @click.prevent="slider_1  = true" 
                                    class="nav-link" :class="{ 'active' : slider_1 }">
                                    Goes Great With</a>
                            </li>
                            <li class="tab-title nav-item">
                                <a href="" @click.prevent="slider_1 = false" 
                                    class="nav-link" :class="{ 'active' : !slider_1 }">
                                    You Might Also Like</a>
                            </li>
                        </ul>

                        <div class="tabs-content">
                            <div class="tab-content" :hidden="slider_1" >
                                <div class="other-products-container">
                                    <button class="other-products-icon btn-previous" ref="slider_1_prev_btn">
                                        <i class="flaticon-left-chevron"></i>
                                    </button>
                                    <button class="other-products-icon btn-next" ref="slider_1_next_btn">
                                        <i class="flaticon-right-chevron"></i>
                                    </button>

                                    <div class="other-products-slider " ref="slider_1">
                                        <other-product 
                                            v-for="(product, index) in data.goesGreatWithProducts" :key="index"
                                            :product="product"
                                            >
                                        </other-product>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-content" :hidden="!slider_1">
                                <div class="other-products-container">
                                    <button class="other-products-icon btn-previous" ref="slider_2_prev_btn">
                                        <i class="flaticon-left-chevron"></i>
                                    </button>
                                    <button class="other-products-icon btn-next" ref="slider_2_next_btn">
                                        <i class="flaticon-right-chevron"></i>
                                    </button>

                                    <div class="other-products-slider" ref="slider_2">
                                        <other-product 
                                            v-for="(product, index) in data.mightLikeProducts" :key="index"
                                            :product="product"
                                            >
                                        </other-product>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <!--  reviews  -->
                <div class="product-reviews-wrapper py-4">
                    <h2 class="product-review-heading text-center"></h2>

                    <!--  Add Review  -->
                    <div class="add-review-btn-container">
                        <a href="" class="add-review-btn btn btn-secondary">
                            WRITE A REVIEW
                            <i class="flaticon flaticon-arrowhead-pointing-to-the-right"></i>
                        </a>
                    </div>


                    <!-- Display Reviews -->
                    <product-review 
                        v-for="(review, index) in data.product.reviews" :key="index"
                        :review="review" 
                        >
                    </product-review>
                </div>

            </div>
        </div>
    </div>
</template>

<script> 
import productPreview from '../components/single-product/product-preview'
import otherProduct from '../components/single-product/other-product'
import sizeChart from '../components/single-product/size-chart'
import productReview from '../components/single-product/product-review'
import { tns } from "tiny-slider/src/tiny-slider"

export default {
    components:{
        productPreview,
        otherProduct,
        sizeChart,
        productReview
    },
    data(){
        return {
            slider_1: true,
            slider_options:{
                items: 5,
                gutter: 10,
                loop: false,
                swipeAngle: 50,
                controls: true,
                nav: false,
                mouseDrag: true,
                responsive: {
                    50: {
                        items: 1
                    },
                    550: {
                        items: 2
                    },
                    700: {
                        items: 3
                    },
                    900:{
                        items: 4
                    },
                    1150: {
                        items: 5
                    }
                }
            },
            data: {
                backText: "Shop all Men's Short Sleeve Shirts",
                backLink: '/short+sleeve',

                sizeChartData: [
                    {
                        size: 'XS',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'MD',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'LG',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XL',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XXL',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: '3XL',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XS',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XS',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XS',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                    {
                        size: 'XS',
                        chest: '30-32',
                        waist: '26(1/2)-28(1/2)'
                    },
                ],

                mightLikeProducts:[
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                ],

                goesGreatWithProducts:[
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/listing/shoes-front-color2.jpg',
                        title: 'UA HOVR™ CGR',
                        price : 'PKR 22,023.21'
                    },
                ],

                product:{
                    id: '1123412',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    rating: 4,
                    price : 'PKR 22,023.21',
                // original_price : 'PKR 27,000.00',
                    message: 'discount',
                    colors: [
                        {
                            icon : '/images/single-product/colors/black.png',
                            name: 'Black',
                            value: 'black',
                            images: [
                                '/images/single-product/black/img-1.jpeg',
                                '/images/single-product/black/img-2.jpeg',
                                '/images/single-product/black/img-3.jpeg',
                                '/images/single-product/black/img-4.jpeg',
                                '/images/single-product/black/img-5.jpeg',
                                '/images/single-product/black/img-6.jpeg',
                            ],
                            sizes: [ 
                                {  size: 'XS', value: 'xs' ,  quantity: 30, },
                                {  size: 'MD', value: 'md', quantity: 20, },
                                {  size: 'LG', value: 'lg', quantity: 15, },
                                {  size: 'XL', value: 'xl', quantity: 10, },
                                {  size: 'XXL', value: 'xxl', quantity: 12, },
                                {  size: '3XL', value: '3xl', quantity: 35, },
                            ]
                        },
                        {
                            icon : '/images/single-product/colors/white.png',
                            name: 'White',
                            value: 'white',
                            images: [
                                '/images/single-product/white/img-1.jpeg',
                                '/images/single-product/white/img-2.jpeg',
                                '/images/single-product/white/img-3.jpeg',
                                '/images/single-product/white/img-4.jpeg',
                                '/images/single-product/white/img-5.jpeg',
                                '/images/single-product/white/img-6.jpeg',                            
                            ],
                            sizes: [ 
                                {  size: 'XS', value: 'xs' ,  quantity: 30, },
                                {  size: 'MD', value: 'md', quantity: 20, },
                                {  size: 'LG', value: 'lg', quantity: 15, },
                                {  size: '3XL', value: '3xl', quantity: 35, },
                            ]
                        }
                    ],

                    reviews: [
                        {
                            title: 'Great Shirt',
                            feedback: "Great Material, fit and style. Bought it for casual wear would recommend it definitely.",
                            rating: 4,
                            performance: 4,
                            comfort: 6,
                            posted_at: 'September 19, 2018',
                            size_purchased: 'SM',
                            user: {
                                name : 'Serbian',
                                gender: 'Male',
                                athlete_type: 'Avid',
                                sport_interest: 'Soccer',
                                height: 'Height'
                            }
                        },
                        {
                            title: 'Great Shirt',
                            feedback: "Great Material, fit and style. Bought it for casual wear would recommend it definitely.",
                            rating: 4,
                            performance: 4,
                            comfort: 6,
                            posted_at: 'September 19, 2018',
                            size_purchased: 'SM',
                            user: {
                                name : 'Serbian',
                                gender: 'Male',
                                athlete_type: 'Avid',
                                sport_interest: 'Soccer',
                                height: 'Height'
                            }
                        },
                        {
                            title: 'Great Shirt',
                            feedback: "Great Material, fit and style. Bought it for casual wear would recommend it definitely.",
                            rating: 4,
                            performance: 4,
                            comfort: 6,
                            posted_at: 'September 19, 2018',
                            size_purchased: 'SM',
                            user: {
                                name : 'Serbian',
                                gender: 'Male',
                                athlete_type: 'Avid',
                                sport_interest: 'Soccer',
                                height: 'Height'
                            }
                        },
                    ]
                },
            },

        }
    },

    mounted(){
        let slider_1 = tns(this.slider_1_options());
        let slider_2 = tns(this.slider_2_options());
    },
    methods:{
        slider_1_options(){
            return Object.assign({},this.slider_options, {
                container : this.$refs.slider_1,
                nextButton : this.$refs.slider_1_next_btn,
                prevButton : this.$refs.slider_1_prev_btn
            })
        },
        slider_2_options(){
            return Object.assign({},this.slider_options, {
                container : this.$refs.slider_2,
                nextButton : this.$refs.slider_2_next_btn,
                prevButton : this.$refs.slider_2_prev_btn
            })
        }
    }
    
}
</script>
