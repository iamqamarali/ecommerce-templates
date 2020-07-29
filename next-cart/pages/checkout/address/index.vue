<template>
    <div class="checkout-address">
        <summary-line :current-stage="2"></summary-line>  
        <div class="checkout-container" >

                <!-- old addresses  --> 
                <div class="old-addresses-page-wrapper" v-if="!addNewAddress">
                    <div class="row">
                        <div class="col-md-8 checkout-left-column">
                            <div class="section pt-4">
                                    <proceed-checkout text="Proceed to Payment" class="d-lg-none" @btn-clicked="$router.push('/checkout/payment')"></proceed-checkout>
                                    <h5 class="checkout-heading title">SELECT ADDRESS</h5>

                                    <button class="btn btn-outline-white btn-rounded my-4" @click="addNewAddress = true">Add new address</button>
    
                                    <div class="addresses-container">
                                        <div class="row ">
                                            <div class="col-sm-6 " v-for="(address, index) in addresses" :key="index">

                                                <div class="card checkout-address-card" >
                                                    <div class="card-body d-flex" @click="selectedAddress = address">
                                                        <input type="radio" class="mr-3" v-model="selectedAddress" :value="address">
                                                        <div class="address-content">
                                                            <div class="address-detail"  >                                                                                                                            <div>{{ address.name }}</div>
                                                                <div>{{ address.address }}</div>
                                                                <div>Landmark: {{ address.landmark}}</div>
                                                                <div>{{ address.city }} -  {{ address.zipcode }}</div>
                                                                <div>Email: {{ address.email }}</div>
                                                                <div>Mobile: {{ address.mobile }}</div>  
                                                            </div>

                                                            <div class="address-actions fs-4x mt-2">
                                                                <span class="fi flaticon-edit mr-1" @click.prevent="editAddress(address)"></span>
                                                                <span class="fi flaticon-delete-button" @click.prevent="deleteAddress(address)"></span>
                                                            </div>                                                         
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4 checkout-right-column">

                            <proceed-checkout text="Proceed to payment" class="d-none d-lg-block" @btn-clicked="$router.push('/checkout/payment')"></proceed-checkout>

                            <credits-and-coupons></credits-and-coupons>

                            <proceed-checkout text="Proceed to payment" @btn-clicked="$router.push('/checkout/payment')"></proceed-checkout>
                        </div>
                    </div>
                </div>



                <!-- add new address --> 
                <div class="add-address-page-wrapper" v-if="addNewAddress">
                    <div class="row" >
                        <div class="col-md-8">
                            <div class="section pt-4">
                                <button class="btn btn-outline-white btn-rounded mb-4" @click="addNewAddress = false">Back to Addresses</button>

                                <form action="" class="add-address-from">
                                        <div class="d-flex justify-content-between">
                                            <div class="radio-buttons-container mb-4">
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input">
                                                        Home
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" class="form-check-input">
                                                        office
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="login-message">
                                                <a href="#" class="site-link">Login</a>
                                                to get your addresses
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.name" placeholder="FULL NAME">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.zipcode" placeholder="PINCODE/ZIPCODE">
                                                </div>
                                            </div>


                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.address" placeholder="ADDRESS">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.city" placeholder="CITY">
                                                </div>
                                            </div>


                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.landmark" placeholder="LANDMARK (Optional)">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.state" placeholder="STATE">
                                                </div>
                                            </div>


                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.locality" placeholder="LOCALITY">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.mobile" placeholder="MOBILE NUMBER">
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.email" placeholder="EMAIL ADDRESS">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="newAddress.altername_phone" placeholder="ALTERNATE PHONE (OPTIONAL)">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-check">
                                            <label for="" class="form-check-label" >
                                                <input type="checkbox" class="form-check-input" v-model="newAddress.default">
                                                Use as default Address
                                            </label>
                                        </div>

                                    <proceed-checkout text="SAVE" @btn-clicked="saveNewAddress" />

                                </form>
                            </div>
                        </div>    
                        <div class="col-md-4">
                            
                        </div>
                    </div>    
                </div>

        </div>
    </div>
</template>

<script>
import proceedCheckout from '@/components/checkout/proceed-checkout'
import summaryLine from '@/components/checkout/summary-line'
import creditsAndCoupons from '@/components/checkout/credits-and-coupons'


    export default {
        components:{
            proceedCheckout,
            summaryLine,
            creditsAndCoupons
        },
        data(){
            return {
                addNewAddress: false,
                newAddress: {},
                selectedAddress: {},
                addresses:[
                    {
                        name : 'some other name',
                        address: 'House #64 street 464, New York',
                        city: 'Lahore',
                        landmark: 'PA',
                        zipcode : 55123,
                        mobile : '03412344123',
                        email : 'example@gmail.com',
                        default: false,
                        altername_phone: '',
                        locality: ''
                    },
                    {
                        name : 'i Donno',
                        address: 'House #64 street 464, New York',
                        city: 'Lahore',
                        landmark: 'PA',
                        zipcode : 55123,
                        mobile : '03412344123',
                        email : 'example@gmail.com',
                        default: false,
                        altername_phone: '',
                        locality: ''
                    },
                    {
                        name : ' different address',
                        address: 'House #64 street 464, New York',
                        city: 'Lahore',
                        landmark: 'PA',
                        zipcode : 55123,
                        mobile : '03412344123',
                        email : 'example@gmail.com',
                        default: false,
                        altername_phone: '',
                        locality: ''
                    }
                ],
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
            }
        },
        methods:{
            mounted(){
                this.resetNewAddress();
            },
            saveNewAddress(){
                this.addNewAddress = false
                //after saving
                this.resetNewAddress()
            },
            editAddress(address){
                this.addNewAddress = true
                this.newAddress = address
            },
            deleteAddress(address){
                if(this.addresses.find(a=> a== address ))
                    this.addresses.splice(this.addresses.indexOf(address), 1);
            },


            resetNewAddress(){
                this.newAddress = {
                    name : '',
                    address: '',
                    city: '',
                    landmark: '',
                    zipcode : '',
                    mobile : '',
                    email : '',
                    state: '',
                    default: false,
                    altername_phone: '',
                    locality: ''
                }
            }
        },
        watch:{
            addNewAddress(newVal){
                if(!newVal)
                    this.resetNewAddress()
            }
        }
    }
</script>
