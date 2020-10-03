<template>
    <div class="single-product-wrapper">
        <div class="single-product mt-3 mt-sm-0">
            <div class="container-fluid ">

                <div class="product-preview-container  bg-light">
                    <a :href="data.backLink" class="product-back-link">{{ data.backText }}</a>
                    <product-preview :product="data.product" ></product-preview>
                </div>

                <div class="section">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 py-3">
                            <div class="product-dna">
                                <h2 class=" text-center mb-4 product-dna-heading">Product Details</h2>
                                <div class="product-dna-description">
                                    <div class="table-responsive-md">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Code:</th>
                                                        <th>Style:</th>
                                                        <th>Color:</th>
                                                        <th>Mental Finish</th>
                                                        <th>Size: </th>
                                                        <th>Length cm:</th>
                                                        <th>Width cm:</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>12345-1.</td>
                                                        <td>Ehem</td>
                                                        <td>Red.</td>
                                                        <td>Metal Finish.</td>
                                                        <td>13.</td>
                                                        <td>12.</td>
                                                        <td>14.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    </div>
                                <!-- <div class="links">
                                        <a href="">Shop all Men's Short Sleeve Shirts</a>
                                        <a href="">How would you rate our product descriptions & photos?</a>
                                    </div>-->
                                </div>
                            </div>
                            
                        </div>

                        <!--<no-ssr>
                            <div class="col-md-4 py-3">
                                <size-chart :sizes="data.sizeChartData" id="size-chart"></size-chart>
                            </div>
                        </no-ssr>  -->
                    </div>
                </div>


                <div class="product-share mb-4">
                    <button class="btn">
                        <span>SHARE</span>
                         <span class="product-share-icons">
                            <i class="fi flaticon-mail"></i>
                            <i class="fi flaticon-facebook-logo"></i>
                            <i class="fi flaticon-twitter"></i>
                            <i class="fi flaticon-instagram"></i>
                        </span>
                    </button>                   
                </div>


                <!-- other products sliders -->
                <div class="other-products-wrapper mb-5">
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
                                            <i class="fi flaticon-left-chevron"></i>
                                        </button>
                                        <button class="other-products-icon btn-next" ref="slider_1_next_btn">
                                            <i class="fi flaticon-right-chevron"></i>
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
                                            <i class=" fi flaticon-left-chevron"></i>
                                        </button>
                                        <button class="other-products-icon btn-next" ref="slider_2_next_btn">
                                            <i class=" fi flaticon-right-chevron"></i>
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
            </div>
                
            <div class="product-page-bottom-box">
                <product-services></product-services>
            </div>
            <div class="container-fluid">
                <!--  reviews  -->
               <!-- <div class="product-reviews-wrapper py-4">
                    <h2 class="product-review-heading text-center"></h2>

                    &lt;!&ndash;  Add Review  &ndash;&gt;
                    <div class="add-review-btn-container">
                        <a href="" class="add-review-btn btn btn-primary">
                            WRITE A REVIEW
                            <i class="fi flaticon-right-arrow ml-3 fs-5x"></i>
                        </a>
                    </div>


                    &lt;!&ndash; Display Reviews &ndash;&gt;
                    <product-review 
                        v-for="(review, index) in data.product.reviews" :key="index"
                        :review="review" 
                        >
                    </product-review>
                </div>-->

            </div>
        </div>
    </div>
</template>

<script> 
import productPreview from '@/components/single-product/product-preview'
import otherProduct from '@/components/single-product/other-product'
import sizeChart from '@/components/single-product/size-chart'
import productReview from '@/components/single-product/product-review'
import productServices from '@/components/listing/product-services'


export default {
    components:{
        productPreview,
        otherProduct,
        sizeChart,
        productReview,
        productServices
    },
    data(){
        return {
            slider_1: true,
            slider_options:{
                items: 9,
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
                backText: "Shop all Women's Necklace",
                backLink: '/listing',

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
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_2.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                ],

                goesGreatWithProducts:[
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                    {
                        url: '/product/something',
                        image : '/images/23692_1.png',
                        title: 'NextCart Women Necklace',
                        price : 'PKR 22,023.21'
                    },
                ],

                product:{
                    id: '1123412',
                    title: 'SET N+E SM BLOCK BK ENAME-GLD-CHAMP',
                    category: "Women's Necklace",
                    rating: 4,
                    price : 'PKR 7,700',
                    original_price : 'PKR 9,900',
                    message: '20% Off',
                    colors: [
                        {
                            icon : '/images/23692_1.png',
                            name: 'Golden',
                            value: 'golden',
                            images: [
                                '/images/23692_1 (1).png',
                                '/images/23692_2.png',
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
        this.$nextTick(()=>{
            let slider_1 = this.$tns(this.slider_1_options());
            let slider_2 = this.$tns(this.slider_2_options());
        })
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
