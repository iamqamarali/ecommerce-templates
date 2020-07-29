<template>
    <div class="listing-page">
        <div class="section">
            <div class="container">

                <listing-header :data="headerData" v-bind:products.sync="products"></listing-header>
                <div class="p-1"></div>

                <!-- products  -->
                <div class="products-wrapper" >
                    <div class="row">
                        <div class="col-xl-6 col-md-8 col-sm-12 " >
                            <div class="background-img static-img " style="background-image:url('/images/listing/listing-static.jpg')"></div>
                        </div>
                        <div class="col-xl-3 col-md-4 col-6  " v-for="(product, index) in products" :key="index">
                            <listing-product v-on:quick-view="quickViewProduct" :product="product" ></listing-product>
                        </div>
                    </div>
                </div>



            </div>

        </div>


        <modal :active.sync="modal.show" width="60%">
            <product-preview :product="modal.product" :inModal="true" ></product-preview>
        </modal>
    </div>
</template>

<script>
import listingHeader from '../components/listing-page/listing-header'
import listingProduct from '../components/listing-page/listing-product'
import modal from '../components/global/modal'
import productPreview from '../components/single-product/product-preview'

export default {
    components:{
        listingHeader,
        listingProduct,
        modal,
        productPreview
    },
    data(){
        return {
            
            headerData:{
                relevance:[
                    {text: 'Best Selling', url: '#'},
                    {text: 'Newest', url: '#'},
                    {text: 'Highest Rated', url: '#'},
                    {text: '$-$$$', url: '#'},
                    {text: '$$$$-$', url: '#'},
                ],
                breadcrumb:[
                    { text:"Men's", url: '/mens' },
                    { text:'New Arrivals', url: '/new-arrivals' }
                ]
            },

            modal:{
                show: false,
                product: {
                    id: '1123412',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    original_price : 'PKR 27,000.00',
                    rating: 4,
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
                }
            },

            products:[
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                 {
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    original_price : 'PKR 30.000.00',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    message: 'Some Message ',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
                {
                    url: '/product/something',
                    title: 'UA HOVR™ CGR Mid Connected',
                    category: "Women's Running Shoes",
                    price : 'PKR 22,023.21',
                    front: '/images/listing/shoes-front.jpg',
                    back: '/images/listing/shoes-back.jpg',
                    colors: [
                        {
                            icon : '/images/listing/icons/shoes-icon-color1.jpg',
                            front: '/images/listing/shoes-front.jpg',
                            back: '/images/listing/shoes-back.jpg',
                        },
                        {
                            icon : '/images/listing/icons/shoes-icon-color2.jpg',
                            front : '/images/listing/shoes-front-color2.jpg',
                            back : '/images/listing/shoes-back-color2.jpg'
                        }
                    ]
                },
        
            ]
        }
    },


    methods:{
        quickViewProduct(product){
//            this.modal.product = product
            this.modal.show = true            
        }
    }
}
</script>

