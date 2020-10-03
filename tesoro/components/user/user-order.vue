<template>
    <div class="user-order">
        <div class="order-top-line">
            <div class="order-date ">
                Order Date: <span class="date font-weight-600">{{ order.date }}</span>
            </div>
            <div class="order-amount d-none d-lg-block">
                Amount Paid: <span class="amount font-weight-600">{{ order.payment.amount }}</span>
            </div>
            <div class="order-details text-right">
                <nuxt-link :to="'user/invoice/' + order.id">View Details</nuxt-link>
            </div>
        </div>
        <div class="order-product">
                <div class="order-product-img-container">
                    <img :src="order.product.img" alt="" class="product-img">
                </div>
                <div class="order-product-details">
                    <h5 class="order-product-title">{{ order.product.title }}</h5>
                    <div class="order-id text-gray">Order ID: {{ order.id }}</div>
                    <div class="size font-weight-500">Size: {{ order.product.size }}</div>
                    <div class="metal font-weight-500">Metal: {{ order.product.metal }}</div>
                    <div class="metal-purity font-weight-500">Metal Purity: {{ order.product.metal_purity }}</div>
                </div>
                <div class="order-details text-right">
                    <h4 class="order-product-price text-primary-light">{{ order.product.price }}</h4>
                    <div class="order-status">
                        Order Statis: <span class="status text-primary-light">{{ order.status }}</span>
                    </div>
                </div>
        </div>
        <div class="order-bottom">
            <div class="order-payment font-sm">
                <div class="payment-method mb-1">
                    <span class="text-gray-darker ">Payment Method:</span> <span class="font-weight-600">{{ order.payment.method }}</span>
                </div>
                <div class="shipping-method">
                    <span class="text-gray-darker">Shipping Method:</span>  <span class="font-weight-600">{{ order.payment.shipping_method }}</span>
                </div>
            </div>
            <div class="order-subtotal">
                <span class="text-gray-darker text-uppercase">Sub total amount: </span>
                <span class="subtotal font-weight-600 text-primary">{{ order.payment.amount }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        order:{
            type: Object,
            required: true
        }
    }
}
</script>
