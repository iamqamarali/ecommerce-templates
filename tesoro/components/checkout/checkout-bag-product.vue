<template>
    <div class="checkout-bag-product-wrapper">
        <div class="checkout-bag-product">
            <div class="bag-product-img-container">
                <img :src="product.img" alt="" class="product-img">
            </div> 
 
            <div class="bag-product-detail-container">
                <div class="bag-product-detail">
                        <h5 class="bag-product-title font-weight-bold" style="margin-bottom: 8px">{{ product.title }}</h5>
                        
                        <div class="bag-product-size d-lg-inline mb-3 mr-lg-3">
                            <span class="bag-product-size-text mr-1">Size</span>

                            <select class="form-control size-select-field" v-model="selSize">
                                <option :value="size"
                                    v-for="(size, index) in product.sizes" :key="index"
                                    :selected=" product.selectedSize && size.value == product.selectedSize.value"
                                    >
                                    {{ size.text }}
                                </option>
                            </select>
                        </div>

                        <div class="bag-product-qty  d-lg-inline mb-3">
                            <span class="bag-product-qty-text">Qty</span>
                            <button class="btn btn-outline-white" @click="decreaseQty">-</button>
                            <span class="qty mx-2"><strong>{{ product.qty }}</strong></span>
                            <button class="btn btn-outline-white" @click="increaseQty">+</button>
                        </div>

                        <div class="bag-product-message d-none d-lg-block">
                            <p class="font-weight-bold"><!--Add 1 product more to get all 3 at Rs 799 from this <a href="" class="checkout-link">COLLECTION</a>--></p>
                        </div>


                        <div class=" bag-product-subtotal-summary-mobile mb-3 d-lg-none">
                            <div class="price-summary  ">
                                <div class="d-flex justify-content-between">
                                    <span>Shipping Charges</span>
                                    <span>Rs 178 </span>
                                </div>
                            </div>
                            <div class="subtotal">
                                <div class="d-flex justify-content-between">
                                    <span>Sub total</span>
                                    <span>Rs 1178 </span>
                                </div>
                            </div>
                        </div>


                        <div class="bag-product-actions">
                            <a href="" class="checkout-link text-uppercase">Move to wishlist</a>
                            <span class="mx-2" >|</span>
                            <a href="" class=" checkout-link text-uppercase" @click.prevent="$emit('delete', product)">Delete</a>
                        </div>
                </div>

                <div class="bag-product-subtotal-summary d-none  d-lg-block text-gray-darker">
                    <div class="price-summary ">
                        <div>
                            (<span class="text-success">9% off</span>) Rs 998
                        </div>
                        <div>
                            <span class="text-success">Shipping Charges</span> Rs 178 
                        </div>
                    </div>
                    <div class="subtotal font-weight-bold">Rs 1176</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        data(){
            return {
                selSize : this.product.selectedSize,
            }
        },
        methods:{
            increaseQty(){
                this.$emit('update:qty', this.product.qty + 1)
            },
            decreaseQty(){
                this.$emit('update:qty', this.product.qty - 1)
            },
        },

        watch:{
            selSize(newVal){
                this.$emit('update:selectedSize', this.newVal)
            }
        }
    }
</script>
