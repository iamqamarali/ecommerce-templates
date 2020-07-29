<template>
    <div class="listing-product" >
        <div class="card">
            <a :href="product.url" class="d-block">
                <div class="product-img-container">
                    <img :src="product.front"  ref="front" alt="" class="card-img-top product-img-front">
                    <img :src="product.back"  ref="back" alt="" class="card-img-top product-img-back">
 
                    <span class="view-message">
                        <span @click.prevent="$emit('quick-view', product)">Quick View</span>
                    </span>
                </div>
            </a>
            <div class="card-body product-body">
                <div class="product-colors-length">
                    {{ product.colors.length }}
                    Color{{ (product.colors.length == 1) ? '' : 's' }} Available    
                </div>
                <div class="product-colors">
                    <img :src="color.icon" 
                        class="color"
                        v-for="(color, index) in product.colors" :key="index" 
                        @mouseover="onHoverColorIcon(color)" 
                        @click="onHoverColorIcon(color)"   
                        />
                </div>
                <div class="product-title">{{ product.title }}</div>
                <div class="product-category">{{ product.category }}</div>
                <div class="product-price" :class="{'text-danger': product.original_price }" >
                    {{ product.price }}
                    <span class="product-original_price">{{ product.original_price }}</span>
                </div>
                <div class="product-message text-danger" v-if="product.message">{{ product.message }}</div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        props: ['product'],
        methods:{
            onHoverColorIcon(color){
                this.$refs.front.src = color.front
                this.$refs.back.src = color.back
            }
        }
    }
</script>

