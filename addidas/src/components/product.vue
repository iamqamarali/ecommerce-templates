<template>
    <a href="#" class="product" :class="{ 'listing-product': listingProduct }">
        <div class="card product-card">


            <div class="product-imgs-wrapper">
                <img :src="product.img" v-if="!listingProduct" alt="" class="card-img-top product-img">

                <img :src="selectedImg.front" v-if="listingProduct" alt="" class="card-img-top product-img product-img-front">
                <img :src="selectedImg.back"  v-if="listingProduct" alt="" class=" card-img-top product-img product-img-back">

                <a href="" class="heart-icon">
                    <i class="fi  flaticon-heart"></i>
                </a>
                <div class="product-label" v-if="product.label">{{ product.label }}</div>
            </div>
            
            <!-- product images icons -->
            <div class="product-imgs-icons-wrapper" v-if="listingProduct">
                <img :src="imageGroup.front" alt=""
                    v-for="(imageGroup, index) in product.images_groups" :key="index"
                    @click.prevent="selectedImg = imageGroup"
                    class="product-img-icon"
                    :class="{ 'selected' : selectedImg == imageGroup }"
                >
            </div>

            <div class="card-body product-card-body">
                <div class="product-category">{{  product.category }}</div>
                <div class="product-title">{{ product.title }}</div>
                <div class="product-price">
                    <span class="product-original-price text-danger text-line-through mr-2 " v-if="product.original_price">
                            {{product.original_price}}</span>    
                    <span class="product-price-now">{{ product.price }}</span>
                </div>                
                <div class="product-colors-count" v-if="product.colors_count">
                    {{ product.colors_count }} colors
                </div>
                <div class="rating-review-container"
                    v-if="product.review_count"
                    >
                    <ul class="rating-stars-nav nav">
                        <li class="nav-item rating-star-item"
                            v-for="index in 5" :key="index">
                            <i class="fi flaticon-star"></i>
                        </li>
                    </ul>
                    <span class="review-count">{{ product.review_count }}</span>
                </div>
                <a :href="product.similar_url" v-if="!listingProduct" class="product-similar-link site-link">View Similar</a>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: {
            product:{
                type: Object,
                required: true
            },
            listingProduct:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                selectedImg : {}
            }
        },
        mounted(){
            if(this.listingProduct)
                this.selectedImg = this.product.images_groups[0];
        }
    }
</script>

