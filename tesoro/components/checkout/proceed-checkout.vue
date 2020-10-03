<template>
        <div class="proceed-checkout">
            <button type="button" class="btn  proceed-checkout-btn"
                @click="proceedCheckout">
                {{ text }}
                <i class="fi flaticon-right-chevron fs-3x "></i>
            </button>
        </div> 
</template>

<script>
    export default {
        props: ['text'],
        methods:{
            proceedCheckout(){
                this.$emit('btn-clicked')
            }
        }

    }
</script>

