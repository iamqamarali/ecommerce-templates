<template>
    <div class="user-panel user-shipping-address">

        <div class="user-panel-header">
            <h4 class="user-panel-heading">Shipping Address</h4>
            <p class="user-panel-subheading">Choose any one to make it primary</p>
        </div>

        <div class="user-panel-content">

            <!-- addresses -->
            <div class="addresses-wrapper font-weight-light">
                <div class="card  cursor-pointer  address"
                    v-for="(address, index) in addresses" :key="index"
                    >
                    <div class="card-body">
                        
                        <div class="address-content"  @click="primaryAddress = address">
                            <!-- radio -->
                            <div class="custom-control mr-1 custom-control-inline custom-radio vertical-align-middle">
                                <input type="radio" v-model="primaryAddress" class="custom-control-input" :value="address">
                                <label class="custom-control-label"></label>
                            </div>

                            <span class="content vertical-align-middle">
                                {{ address.name }} ,
                                {{ address.address1 }} , 
                                <span v-if="address.address2">{{ address.address2 }} ,</span> 
                                {{ address.province }} , 
                                {{ address.city }} , 
                                {{ address.zip }} , 
                                {{ address.country }}
                            </span>
                        </div>

                        <div class="address-actions">
                            <i @click="removeAddress(address)" class="fi flaticon-delete-button fs-3x mr-1"></i>
                            <i @click="editAddress(address)" class="fi  flaticon-edit fs-3x"></i>
                        </div>   
                    </div>
                </div>
            </div>
   
            <button type="button" class="btn btn-primary add-new-address-btn" @click="addNewAddress()">Add New Address</button>
    
            <!-- new Address -->
            <div class="new-address" v-if="addAddress">
                
                <h5 class="new-address-heading my-3">Shipping Address</h5>
                
                <form action="" class="new-address-form text-gray">
                    <div class="form-row">
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Name <span class="text-danger">*</span></label>
                                <input type="text" v-model="newAddress.name" class="form-control">
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Address 1 <span class="text-danger">*</span></label>
                                <input type="text" v-model="newAddress.address1" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Address 2 </label>
                                <input type="text" v-model="newAddress.address2" class="form-control">
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Country <span class="text-danger">*</span></label>
                                <select v-model="newAddress.country"  class="form-control">
                                    <option 
                                        :value="country"
                                        v-for="(country, index) in countries" :key="index">
                                        {{ country }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Province / State <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="newAddress.province">
                                    <option 
                                        :value="p"
                                        v-for="(p, index) in provinces" :key="index">
                                        {{ p }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">City <span class="text-danger">*</span></label>
                                <input type="text"  v-model="newAddress.city" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md">
                            <div class="form-group">
                                <label for="">Postal Code / Zip <span class="text-danger">*</span></label>
                                <input type="text"  v-model="newAddress.zip" class="form-control">
                            </div>
                        </div>
                        <div class="col-md"></div>
                    </div>

                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="primary-address-input" v-model="newAddress.primary" class="custom-control-input">
                            <label for="primary-address-input" class="custom-control-label">Make this my primary shipping address</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="button" @click="saveAddress" class="btn btn-primary">Save</button>
                        <button type="button" @click="cancelSaveAddress" class="btn btn-outline-white">Cancel</button>
                    </div>

                </form>
            </div>


        </div>    

    </div>
</template>

<script>
    export default {
        layout: 'user',
        data(){
            return {
                addAddress : false,
                newAddress: {},

                countries:[
                    'Pakistan',
                    "USA",
                    "UAE",
                    "Swizerland",
                    'Kwait',
                    "Italy",
                    "France",
                    'India',

                ],
                addresses:[
                    {
                        id: 1,
                        name: 'Ali Hamza',
                        address1: 'Gandhi Nagar India Karla',
                        address2: '',
                        province : 'Delhi',
                        city : 'New Delhi',
                        zip: '110001',
                        country: 'india'
                    },
                    {
                        id: 2,
                        name: 'Qamar Ali',
                        address1: '451 johartown',
                        address2: '',
                        province : 'Punjab',
                        city : 'Lahore',
                        zip: '555123',
                        country: 'Pakistan'
                    },                    
                ],
                primaryAddress: {
                    id: 2,
                    name: 'Qamar Ali',
                    address1: '451 johartown',
                    address2: '',
                    province : 'Punjab',
                    city : 'Lahore',
                    zip: '555123',
                    country: 'Pakistan'
                }
            }
        },
        mounted(){
            this.resetNewAddress();
        },

        computed:{
            provinces(){

                // according to current country  fetch provinces
                return [
                    'Punjab',
                    'Blochistan',
                    'KPK',
                    'Sindth'
                ]
            }
        },


        methods:{
            resetNewAddress(){
                this.newAddress = {
                    id: - Math.random(),
                    name: '',
                    address1: '',
                    address2: '',
                    province : '',
                    city : '',
                    zip: '',
                    country: '',
                    primary: false
                }
            },
            removeAddress(address){
                if(this.addresses.indexOf(address) !=  -1)
                    this.addresses.splice(this.addresses.indexOf(address) , 1)
            },
            editAddress(address){
                this.newAddress = address
                this.addAddress = true
            },
            addNewAddress(){
                this.addAddress = true
            },
            saveAddress(){
                // if address is being edited
                let oldAddress = this.addresses.find(a => a.id == this.newAddress.id)
                if(oldAddress !=  undefined){
                    let index = this.addresses.indexOf(oldAddress)
                    console.log(index)
                    this.addresses.splice(index, 1 ,  this.newAddress)
                    this.addAddress = false
                    this.resetNewAddress()
            
                    // do something with api
                    return 
                }
                    
                this.addresses.push(this.newAddress)
                this.addAddress = false
                this.resetNewAddress()
            },
            cancelSaveAddress(){
                this.addAddress = false
                this.resetNewAddress()
            }
        }
    }
</script>
