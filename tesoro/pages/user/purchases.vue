<template>
    <div class="user-panel user-purchaces">

        <div class="user-panel-header">
            <h4 class="user-panel-heading">My Order</h4>
        </div>

        <div class="user-panel-content"  v-if="orders.length">
            <div class="orders-wrapper">

                <user-order
                    v-for="(order, index) in orders" :key="index"
                    :order="order"
                >
                </user-order>

            </div>  
        </div>    

        <div class="user-panel-empty" v-else>
            <div class="alert alert-warning" role="alert">
                No Records Found
            </div>
        </div>


        <div class="user-panel-footer" v-if="orders.length">
            <pagination-widget
                class="justify-content-end"
                :links="pagination.links" 
                :prev="pagination.prev"
                :next="pagination.next"
                >
            </pagination-widget>  
        </div>    

    </div>
</template>

<script>
import userOrder from '@/components/user/user-order'
import paginationWidget from '@/components/pagination-widget'

export default {
    layout: 'user',
    components:{
        userOrder,
        paginationWidget
    },
    data(){
        return {
            orders:[
                {
                    id: '19711',
                    date: "11/21/2018 11:56 AM",
                    status: 'Order Received',
                    payment:{
                        amount: 'RS 4,855',
                        method: "Cash On Delivery",
                        shipping_method: "Free Shipping"
                    },
                    product:{
                        img: "https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg",
                        title: 'The Avalee Gold Ring',
                        size: '08',
                        metal: 'Yellow Gold',
                        metal_purity: '22KT',
                        price: 'RS 4,855'
                    }
                },
                {
                    id: '19711',
                    date: "11/21/2018 11:56 AM",
                    status: 'Order Received',
                    payment:{
                        amount: 'RS 4,855',
                        method: "Cash On Delivery",
                        shipping_method: "Free Shipping"
                    },
                    product:{
                        img: "https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg",
                        title: 'The Avalee Gold Ring',
                        size: '08',
                        metal: 'Yellow Gold',
                        metal_purity: '22KT',
                        price: 'RS 4,855'
                    }
                },
                {
                    id: '19711',
                    date: "11/21/2018 11:56 AM",
                    status: 'Order Received',
                    payment:{
                        amount: 'RS 4,855',
                        method: "Cash On Delivery",
                        shipping_method: "Free Shipping"
                    },
                    product:{
                        img: "https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg",
                        title: 'The Avalee Gold Ring',
                        size: '08',
                        metal: 'Yellow Gold',
                        metal_purity: '22KT',
                        price: 'RS 4,855'
                    }
                },
            ],

            pagination:{
                links:[
                    { href:'/user/purchases?page=1', current: true },
                ],
                next: '/user/purchases?page=2',
                prev: null
            }

        }
    }
}
</script>
