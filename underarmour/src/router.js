import Vue from 'vue'
import VueRouter  from 'vue-router'

import landingPage from './pages/landing-page'
import listing from './pages/listing'
import singleProduct from './pages/single-product'
import categoryShop from './pages/category-shop'


Vue.use(VueRouter )

let routes  = [
    {
        path : '/',
        component : landingPage
    },
    {
        path: '/category',
        component : categoryShop
    },
    {
        path: '/listing',
        component: listing
    },
    {
        path: '/single-product',
        component: singleProduct
    }

];


export default  new VueRouter({
    mode: 'history',
    routes 
})
