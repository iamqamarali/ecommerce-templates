<template>
    <div class="product-preview-wrapper" :class="{'in-modal': inModal} ">
        <div class="product-preview">
            
            <div class="row no-gutters">
                <div class="product-images-column order-1 order-lg-0" :class="{ 'col-lg-8' : !inModal , 'col-lg-6' :inModal }">
                    <div class="product-images-container">
                        <a href="" class="like-btn" v-if="!inModal">
                            <i class="icon icon-heart"></i>
                        </a>

                        <product-images-view :images="selectedColor.images"></product-images-view>
                    </div>
                </div> 
                <div class="product-detail-column order-0  order-lg-1" :class="{ 'col-lg-4' : !inModal , 'col-lg-6' :inModal }">               
                    <div class="product-detail">
                        <span class="product-speciality d-none d-lg-block" >New Arrival</span>

                        <h4 class="product-title">{{ product.title }}</h4>
                        <div class="product-category">{{ product.category }}</div>
                        <div class="product-rating-and-style">
                            <rating :rating="product.rating" ></rating>
                            <span class="fs-1x ml-1 font-weight-light" v-if="product.reviews" > {{ product.reviews.length }}</span>
                            <span class="ml-1 font-weight-light">| </span>
                            <span class="product-style">
                                Style #{{ product.id }}
                            </span>
                        </div>
                        <div class="product-price">
                            <span :class="{ 'text-danger' :product.original_price }">
                                {{ product.price }}
                            </span>
                            <span class="ml-2 product-original-price" v-if="product.original_price" >
                                {{ product.original_price }}
                            </span>
                            <span class="ml-2 product-message text-danger" v-if="product.message">
                                {{product.message}}
                            </span>
                        </div>

                        
                        <!-- COlors  -->
                        <div class="product-color-wrapper">
                            <strong class="product-color-title">Color :</strong>
                            <span class="product-color-selected-name ml-1 ">
                                {{ selectedColor.name }}
                            </span>
                        </div>                        

                        <div class="product-color-images-wrapper">
                            <span class="product-color-image-item"
                                v-for="(color, index) in product.colors" :key="index"
                                :class="{ 'selected' : selectedColor == color }"
                                @click="selectedColor = color"
                                >
                                <img :src="color.icon" class="product-color-image" alt="">
                            </span>
                        </div>

                        <!-- Sizes -->
                        <div class="product-size-wrapper">
                            <strong class="product-size-title" v-if="selectedSize.size" >Size : </strong>
                            <span class="product-size-selected-name ml-1">
                                {{ selectedSize.size? selectedSize.size : 'Please select a size'  }} 
                            </span>

                            <a href="#size-chart" class="size-chart-link float-right">Size Chart</a>
                        </div>
                        <div class="product-sizes">
                            <button class="product-size"
                                v-for="(size, index) in selectedColor.sizes" :key="index"
                                :value="size.value" 
                                :class="{'selected' : selectedSize.value == size.value}"
                                @click="selectedSize = size"
                                >
                                {{ size.size }}
                            </button>
                        </div>


                        <!-- quantity -->
                        <div class="product-quantity mr-3 mt-5">
                            <span class="product-quantity-title">Qty</span>
                            <select name="quantity" class=" form-control">
                                <option :value="item" v-for="item in selectedSize.quantity" :key="item" >
                                    {{ item }}
                                </option>
                            </select>
                            <span class="product-quantity-border"></span>
                        </div>
                        
                        <button class="btn product-add-to-bag-btn"
                            @click="addToBag(product.id)">
                            Add To Bag
                            <i class="icon icon-bag-white ml-1"></i>
                        </button>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import productImagesView from './product-images-view'
import rating from '../global/rating'

export default {
    props: ['product', 'inModal'],
    components:{
        productImagesView,
        rating
    },
    data(){
        return {
            selectedColor: this.product.colors[0],
            selectedSize: {}
        }
    },

    methods:{
        addToBag(productId){
            console.log(productId)
        }
    }
    
}
</script>

