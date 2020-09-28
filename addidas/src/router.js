import Vue from 'vue'
import VueRouter  from 'vue-router'

import landingPage from './pages/landing-page'
import categoryPage from './pages/category-page'
import listingPage from './pages/listing-page'


Vue.use(VueRouter )

let routes  = [
    {
        path : '/',
        component : landingPage
    },
    {
        path: '/category',
        component : categoryPage
    },
    {
        path: '/listing',
        component: listingPage
    }

];


export default  new VueRouter({
    mode: 'history',
    routes 
})
