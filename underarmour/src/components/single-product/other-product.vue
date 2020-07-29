<template>
    <div class="other-product">
        <a :href="product.url">
            <div class="card">
                <div class="card-body-container  other-product-image-container">
                    <img :src="product.image" alt="" class="other-product-image">
                </div>
                <div class="card-body text-center  other-product-body">
                    <div class="other-product-title">{{ product.title }}</div>
                    <div class="other-product-price">{{ product.price }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

