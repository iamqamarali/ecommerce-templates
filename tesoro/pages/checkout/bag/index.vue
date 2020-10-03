<template>
    <div class="checkout-bag">
        <summary-line :current-stage="1"></summary-line>    

        <!-- empty -->
        <div class="empty-checkout-bag text-center" v-if="!bagProducts.length">
           <div class="section">
                <i class="fi flaticon-shopping-bag fs-20x"></i>  
               <p class="mt-4 fs-2x text-gray-darker">
                    Your shopping bag is empty
               </p>

                <proceed-checkout text="Start Shopping"  @btn-clicked="$router.push('/listing')"></proceed-checkout>

                <div class="mt-4">
                    <a href="" class="site-link text-uppercase">ADD ITEMS from wishlist</a>
                </div>
           </div>
        </div>
        
        <!-- if bag has products -->
        <div class="checkout-container" v-else>
                <div class="row">
                    <div class="col-lg-8 checkout-left-column">
                        <div class="section pt-4">

                            <proceed-checkout text="Place Order" class="d-lg-none" @btn-clicked="$router.push('/checkout/address')"></proceed-checkout>

                            <div class="checkout-bag-items-contaner">
                                <checkout-bag-product 
                                    v-for="(product, index) in bagProducts" :key="index"
                                    :product="product"
                                    :selected-size.sync="product.selectedSize"
                                    :qty.sync="product.qty"
                                    @delete="productDeleted(product)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 checkout-right-column">
                        <div class="bag-detail">
                            <proceed-checkout text="Place Order"  class="d-none d-lg-block" @btn-clicked="$router.push('/checkout/address')"></proceed-checkout>

                            <credits-and-coupons></credits-and-coupons>

                            <proceed-checkout text="Place Order" @btn-clicked="$router.push('/checkout/address')"></proceed-checkout>

                        </div>
                    </div>
                </div>
        </div>

    </div>
</template>

<script>

import checkoutBagProduct from '@/components/checkout/checkout-bag-product'
import proceedCheckout from '@/components/checkout/proceed-checkout'
import summaryLine from '@/components/checkout/summary-line'
import creditsAndCoupons from '@/components/checkout/credits-and-coupons'

    export default {
        components:{
            checkoutBagProduct,
            proceedCheckout,
            summaryLine,
            creditsAndCoupons
        },
        data(){
            return {
                bagProducts:[
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg',
                        title: "The Avalee Gold Ring",
                        sizes: [
                            { text: '6', value: '6' },
                            { text: '7', value: '7' },
                            { text: '8', value: '8' },
                            { text: '9', value: '9' },
                        ],
                        selectedSize: { text: '7', value: '7' },
                        qty: 2,
                        percentOff: 9,
                        price : 998,
                        shipping: 178,
                        total : 1176
                    },
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/e/ER00171-1.jpg',
                        title: "The Avalee Gold Ring",
                        sizes: [
                            { text: '6', value: '6' },
                            { text: '7', value: '7' },
                            { text: '8', value: '8' },
                            { text: '9', value: '9' },
                        ],
                        selectedSize: { text: '7', value: '7' },
                        qty: 1,
                        percentOff: 9,
                        price : 998,
                        shipping: 178,
                        total : 1176
                    }
                ],
            }
        },


        methods:{
            productDeleted(prod){
                this.bagProducts.splice(this.bagProducts.indexOf(prod), 1);
                // do something else
            }
        },

        watch:{
           
        }
    }
</script>
