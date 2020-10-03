<template>
    <div class="checkout-payment">
        <summary-line :current-stage="3"></summary-line>  

        <div class="checkout-container" >
            <div class="section pt-4">
    
               <proceed-checkout text="Make payment RS 987" 
                        class="d-lg-none"
                        @btn-clicked="$router.push('/checkout/success')"></proceed-checkout>
              <div class="row">
                    <div class="col-md-8">
                        
                        <no-ssr>
                            <div class="payment-methods">
                                    <!-- Net Banking -->
                                    <div class="payment-method">
                                        <div class="card payment-method-card">
                                            <div class="card-header" v-b-toggle.net-banking  @click="paymentMethod = 'net-banking'" >
                                                <h4 class="card-title" >
                                                    <input type="radio"  v-model="paymentMethod" value="net-banking">
                                                    Net Banking
                                                </h4>
                                            </div>

                                            <b-collapse id="net-banking" accordion="my-accordion">
                                                <div class="card-body payment-method-options">

                                                            <div class="payment-method-option"
                                                                v-for="(bank, index) in banks" :key="index"
                                                                @click.prevent="selectedBank = bank"
                                                                :class="{ 'selected' : selectedBank == bank }"
                                                                >
                                                                <img :src="bank.img" class="payment-method-option-img" alt="">
                                                            </div>
                                                </div>
                                            </b-collapse>
                                        </div>                            
                                    </div>

                                    <!-- credit card-->
                                    <div class="payment-method">
                                        <div class="card payment-method-card">
                                            <div class="card-header" v-b-toggle.credit-card  @click="paymentMethod = 'credit-card'">
                                                <h4 class="card-title" >
                                                    <input type="radio"  v-model="paymentMethod" value="credit-card">
                                                    Credit Card
                                                </h4>
                                            </div>

                                            <b-collapse id="credit-card" accordion="my-accordion">
                                                <div class="card-body payment-method-options">

                                                    <div class="credit-card-details-container">

                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Card number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Cardholder name">
                                                        </div>
                                                        
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="form-group">
                                                                    <select name="" id="" class="form-control">
                                                                        <option >Expiry MM</option>
                                                                        <option 
                                                                            v-for="index in 12" :key="index"
                                                                            :value="index">
                                                                            {{ index }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="form-group">
                                                                    <select name="" id="" class="form-control">
                                                                        <option >Expiry YYYY</option>
                                                                        <option 
                                                                            v-for="index in 10" :key="index"
                                                                            :value="index + 2017">
                                                                            {{ index + 2017 }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="CVV">
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="" class="form-check-label">
                                                                <input type="checkbox" class="" name="" id="">    
                                                                Save card
                                                            </label>  
                                                        </div>
                                                    </div>

                                                </div>
                                            </b-collapse>
                                        </div>                            
                                    </div>

                                    <!-- debit card -->
                                    <div class="payment-method">
                                        <div class="card payment-method-card">
                                            <div class="card-header" v-b-toggle.debit-card  @click="paymentMethod = 'debit-card-atm'">
                                                <h4 class="card-title">
                                                    <input type="radio"  v-model="paymentMethod" value="debit-card-atm">
                                                    Debit Card / ATM
                                                </h4>
                                            </div>
                                            <b-collapse id="debit-card" accordion="my-accordion">
                                                <div class="card-body payment-method-options">

                                                    <div class="debit-card-details-container">

                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Card number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Cardholder name">
                                                        </div>
                                                        
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="form-group">
                                                                    <select name="" id="" class="form-control">
                                                                        <option >Expiry MM</option>
                                                                        <option 
                                                                            v-for="index in 12" :key="index"
                                                                            :value="index">
                                                                            {{ index }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="form-group">
                                                                    <select name="" id="" class="form-control">
                                                                        <option >Expiry YYYY</option>
                                                                        <option 
                                                                            v-for="index in 10" :key="index"
                                                                            :value="index + 2017">
                                                                            {{ index + 2017 }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="CVV">
                                                        </div>

                                                        <div class="form-group">
                                                            <label for="" class="form-check-label">
                                                                <input type="checkbox" class="" name="" id="">    
                                                                Save card
                                                            </label>  
                                                        </div>
                                                    </div>

                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>                 

                                    <!-- Cash on Delivery -->
                                    <div class="payment-method">
                                        <div class="card payment-method-card">
                                            <div class="card-header" v-b-toggle.cash-on-delivery  @click="paymentMethod = 'cash-on-delivery'">
                                                <h4 class="card-title">
                                                    <input type="radio" v-model="paymentMethod" value="cash-on-delivery">
                                                    Cash On Delivery
                                                </h4>
                                            </div>
                                            <b-collapse id="cash-on-delivery" accordion="my-accordion">
                                                <div class="card-body payment-method-options ">
                                                    
                                                    <div class="text-center">
                                                        <small class="font-weight-bold">
                                                            Cash On Delivery Charges: 49
                                                        </small>                        
                                                        <div>
                                                            <small>Save COD Charges by paying online</small>                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>                 
                            </div>                            
                        </no-ssr>


                    </div>
                    <div class="col-md-4">
                        
                         <proceed-checkout text="Make payment RS 987" 
                        @btn-clicked="$router.push('/checkout/success')"></proceed-checkout>

                        <credits-and-coupons></credits-and-coupons>

                        <div class="card checkout-address-card" >
                            <div class="card-body">
                                <h5 class="card-title">DELIVER TO</h5>
                                <div>{{ address.name }}</div>
                                <div>{{ address.address }}</div>
                                <div>Landmark: {{ address.landmark}}</div>
                                <div>{{ address.city }} -  {{ address.zipcode }}</div>
                                <div>Email: {{ address.email }}</div>
                                <div>Mobile: {{ address.mobile }}</div>
                                <a href="" class="site-link mt-3 d-block">Change Address</a>
                            </div>
                        </div>

                        <proceed-checkout text="Make payment RS 987" 
                        @btn-clicked="$router.push('/checkout/success')"></proceed-checkout>

                    </div>
                </div>


            </div>           
        </div>
        
    </div>
</template>

<script>
import summaryLine from '@/components/checkout/summary-line'
import proceedCheckout from '@/components/checkout/proceed-checkout'
import creditsAndCoupons from '@/components/checkout/credits-and-coupons'

    export default {
        components:{
            summaryLine,
            proceedCheckout,
            creditsAndCoupons
        },
        data(){
            return {
                selectedBank: {},
                paymentMethod: '',
                address: {
                    name : 'some other name',
                    address: 'House #64 street 464, New York',
                    city: 'Lahore',
                    landmark: 'PA',
                    zipcode : 55123,
                    mobile : '03412344123',
                    email : 'example@gmail.com'
                },
                bagProducts:[
                    {
                        img: 'https://images10.voonik.com/81927062/marco-ferro-tan-mens-casual-shoes-lace-up-e4fc2505-small.jpg?1499777326',
                        title: "Artery Tan Men's Casual Shoes Lace Up",
                        sizes: [
                            { text: 'UK-6', value: 'UK-6' },
                            { text: 'UK-7', value: 'UK-7' },
                            { text: 'UK-8', value: 'UK-8' },
                            { text: 'UK-9', value: 'UK-9' },
                        ],
                        selectedSize: { text: 'UK-7', value: 'UK-7' },
                        qty: 2,
                        percentOff: 9,
                        price : 998,
                        shipping: 178,
                        total : 1176
                    },
                    {
                        img: 'https://images10.voonik.com/04576252/1715-Blue-1_20-small.JPG?1500293008',
                        title: "Artery Tan Men's Casual Shoes Lace Up",
                        sizes: [
                            { text: 'UK-6', value: 'UK-6' },
                            { text: 'UK-7', value: 'UK-7' },
                            { text: 'UK-8', value: 'UK-8' },
                            { text: 'UK-9', value: 'UK-9' },
                        ],
                        selectedSize: { text: 'UK-7', value: 'UK-7' },
                        qty: 2,
                        percentOff: 9,
                        price : 998,
                        shipping: 178,
                        total : 1176
                    }
                ],

                banks:[
                    { img: 'https://pkinstituteonline.com/wp-content/uploads/2017/02/logo-hbl.png' },
                    { img: 'https://pkinstituteonline.com/wp-content/uploads/2017/02/logo-hbl.png' },
                    { img: 'https://pkinstituteonline.com/wp-content/uploads/2017/02/logo-hbl.png' },
                    { img: 'https://pkinstituteonline.com/wp-content/uploads/2017/02/logo-hbl.png' },
                ]
            }
        },

        methods:{
            makePayment(){
                console.log(this.paymentMethod)
            }
        }     
    }
</script>

