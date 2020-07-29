<template>
    <div class="checkout-success">
        <div class="checkout-container">
            <div class="section  py-4">
                <div class="row">
                    <div class="col-md-8">
                        <div class="success-message-container text-center text-gray-darker">
                            <div class="icon-check-container mb-4">
                                <i class="fi flaticon-checked-1 fs-20x text-primary"></i>
                            </div>
                            <h3 class="text-primary-light font-weight-bold">THANK YOU FOR YOUR ORDER</h3>
                            <br>
                            <p>
                                <small>
                                    Your order has been placed and is being processed.When the items are shipped,you will receive an email with the details.You can track this order through
                                </small>
                                 <a href="" class="site-link">My Order Page.</a>   
                            </p>

                            <p class="">Transaction ID: <span class="font-weight-bold">19511, 19512</span></p>
                            
                            <div class="address mb-3 ">
                                <small>my name , Gandhi Nagar India Karla, Delhi, New Delhi, 110001, India, 9999999999</small>
                            </div>

                            <button type="button" class="btn-lg btn-primary font-weight-500  mb-5"
                                @click="$router.push('/listing')">
                                Continue Shopping
                                <i class="fi flaticon-right-chevron fs-2x "></i>
                            </button>


                            <!-- follow -->
                            <h5 class="follow-us-heading text-primary font-weight-bold mb-3">FOLLOW US</h5>

                            <ul class="nav justify-content-center share-icons-nav">
                                <li class="nav-item">
                                    <a href="" class="nav-link">
                                        <i class="fi flaticon-twitter "></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">
                                        <i class="fi flaticon-facebook-logo "></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-md-4">
                        
                        <div class="success-summary-container">
                            <div class="card success-summary-card">
                                <div class="card-header">
                                    <h4 class="card-title checkout-success-summary-title"> ORDER SUMMARY</h4>
                                </div>
                                <div class="card-body">

                                    <div class="summary-products">
                                        <div class="summary-product"
                                            v-for="(prod, index) in summaryProducts" :key="index"                                    
                                            >
                                            <div class="summary-product-img-container">
                                                <img :src="prod.img" alt="" class=" img-fluid summary-product-img">
                                            </div>
                                            <div class="summary-product-detail">
                                                <p class="summary-product-title mb-3 text-gray-darker fs-2x">{{ prod.title }}</p>
                                                <span class="font-weight-500">{{ prod.price }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="summary-subtotal text-center my-3">
                                        <span class="text">Subtotal Amount : </span>
                                        <span class="subtotal">RS 17,151</span>
                                    </div>

                                    <div class="summary-total text-center mb-3">
                                        <h4 class="font-weight-600">
                                            <span class="text">Total Amount: </span>
                                            <span class="total">RS 17,151</span>
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                summaryProducts:[
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg',
                        title: 'The Avalee Gold Ring',
                        price: 'RS 4,569'
                    },
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/e/ER00171-1.jpg',
                        title: 'The Avalee Gold Ring',
                        price: 'RS 4,569'
                    },
                ]
            }
        }
    }
</script>

