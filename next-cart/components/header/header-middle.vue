<template>
    <div class="header-middle" >
        <div class="navbar navbar-expand-lg navbar-light  main-navbar" >
            <div class="container-fluid">
 
                    <button class="navbar-toggler toggler" 
                        :class="{ active : showSidebar}"
                        @click="showSidebar = true"
                        >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
 
                    <a href="/" class="navbar-brand">
<!--
                        <img src="https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/new-logo.png" class="navbar-logo img-fluid" alt="">
-->
                        <img :src="'/images/logo-grey.png'" class="navbar-logo img-fluid" alt="">
                    </a>

                    
                    <div class="collapse navbar-collapse navbar-search-form-wrapper"
                        :class="{'show' : openSearchForm}"
                        >
                          <form action="" class="navbar-search-form">
                              <div class="input-group input-group-appended">
                                  <input type="text" class="form-control" placeholder="Search Products">
                                  <div class="input-group-append">
                                      <button type="submit" class="input-group-text">
                                          <i class="fi flaticon-magnifying-glass"></i>
                                      </button>
                                  </div>
                              </div>
                          </form>
                    </div>
                    
                    <!-- navbar end  -->
                    <div class="navbar-end main-navbar-end">
                        <ul class="nav ">

                            <li class="nav-item  d-none d-lg-block" v-if="!$parent.loggedIn">
                                <a href="" class="nav-link">Login</a>
                            </li>
                            <li class="nav-item  d-none d-lg-block" v-if="!$parent.loggedIn">
                                <a href="" class="nav-link">Register</a>
                            </li>

                            <dropdown tag="li" right class="nav-item nav-item-user  d-none d-lg-block" 
                                v-if="$parent.loggedIn">
                                <a href="" class="nav-link nav-link-user"
                                    slot="toggler" >
                                    <span class="user">
                                        <div class="user-message text-primary">Welcome</div>
                                        <div class="username">Ali Hamza</div>
                                    </span>
                                    <i class="fi flaticon-down-chevron ml-2"></i>
                                </a>
                                <div slot="menu" >
                                    <nuxt-link to="/user/purchases" class="dropdown-item">My Orders</nuxt-link>
                                    <nuxt-link to="/user/return-requests" class="dropdown-item">Return Requests</nuxt-link>
                                    <nuxt-link to="/user/edit" class="dropdown-item">My Account</nuxt-link>
                                    <nuxt-link to="/user/logout" class="dropdown-item">Logout</nuxt-link>
                                </div>
                            </dropdown>

                            <!-- ICONS -->
                            <li class="nav-item  icon-nav-item nav-search-icon d-lg-none">
                                <a href="" class="nav-link" 
                                    :class="{ 'active' : openSearchForm }"
                                    @click.prevent="openSearchForm = !openSearchForm"
                                    >
                                    <i class="fi flaticon-magnifying-glass"></i>
                                </a> 
                            </li>
                            <li class="nav-item icon-nav-item">
                                <a href="" class="nav-link">
                                    <i class="fi flaticon-like"></i>
                                </a>
                            </li>

                            <dropdown tag="li" right class="nav-item icon-nav-item nav-item-bag" >
                                <a href="" class="nav-link"
                                    slot="toggler">
                                    <i class="fi flaticon-shopping-bag"></i>
                                    <span class="badge badge-primary bag-items-badge">{{ bagProducts.length }}</span>
                                </a>
                                <div slot="menu" >
                                    <div class="bag">
                                        <div class="bag-header">
                                            <span class="font-weight-500 mr-1">My Bag,</span>
                                            <span class="bag-item-count">{{ bagProducts.length }} item</span>
                                        </div>
                                        <div class="bag-content" v-if="bagProducts.length" >
                                            <div class="bag-items">
                                                <div class="bag-item"
                                                    v-for="(p, index) in bagProducts" :key="index">
                                                    <div class="bag-item-img-container">
                                                        <img :src="p.img" alt="" class=" img-fluid bag-item-img">
                                                    </div>
                                                    <div class="bag-item-content font-md">
                                                        <div class="bag-item-price font-weight-500 fs-3x mb-2">{{ p.price }}</div>
                                                        <div class="bag-item-title">{{ p.title }}</div>
                                                        <div class="d-flex">
                                                            <span>Mono</span>
                                                            <span>UK 12</span>
                                                            <span>Qty: {{ p.qty }}</span>
                                                        </div>
                                                        <i @click="removeBagProduct(p)" class="fi flaticon-delete-button float-right mt-3 fs-6x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bag-subtotal d-flex justify-content-between">
                                                <span class="subtotal">Sub-total</span>
                                                <span>Rs 1000</span>
                                            </div>
                                        </div>
                                        <!-- empty bag content -->
                                        <div class="bag-content bag-empty text-center p-2 py-4" v-else>
                                            <i class="fi flaticon-shopping-bag fs-10x"></i>  
                                            <p class="mt-4 fs-2x text-gray-darker">
                                                    Your shopping bag is empty
                                            </p>
                                        </div>
                                        <div class="bag-footer">
                                            <div class="bag-footer-btns">
                                                <nuxt-link to="/checkout/bag" class="btn btn-white">View Bag</nuxt-link>
                                                <nuxt-link to="/checkout/address" class="btn btn-success">Checkout</nuxt-link>
                                            </div>
                                            <div class="footer-message text-center p-2">
                                                Free Delivery Worldwide
                                                <div><small>More info <a href="">here</a></small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dropdown>

                        </ul>
                    </div>

            </div>
        </div>
    </div>
</template>

<script>
    import rootEventHandler from '@/mixins/rootEventHandler'
    import dropdown from '../dropdown'
    export default {
        mixins:[rootEventHandler],
        components:{
            dropdown
        },
        data(){
            return {
                showSidebar: false,
                openSearchForm: false,
                selectedDropdown: '',
                categoryGroups:[
                    [
                        {
                            text: 'men',
                            url :'/men',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    links:[
                                        { text: 'New ARRIvals', url: '/new-arrivals' },
                                        { text: 'Best sellers', url: '/best-arrivals' },
                                        { text: 'Release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'women',
                            url :'/wemen',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    links:[
                                        { text: 'new ARRIvals', url: '/new-arrivals' },
                                        { text: 'best sellers', url: '/best-arrivals' },
                                        { text: 'release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'kids',
                            url :'/kids',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    links:[
                                        { text: 'new ARRIvals', url: '/new-arrivals' },
                                        { text: 'best sellers', url: '/best-arrivals' },
                                        { text: 'release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                    ],
                    [
                        {
                            text: 'soprts',
                            url :'/sports',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text: 'new ARRIvals', url: '/new-arrivals' },
                                        { text: 'best sellers', url: '/best-arrivals' },
                                        { text: 'release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'brands',
                            url :'/brands',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text: 'new ARRIvals', url: '/new-arrivals' },
                                        { text: 'best sellers', url: '/best-arrivals' },
                                        { text: 'release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    img: '/images/category-dropdown-img.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                    ],
                    [
                        {
                            text: 'customize',
                            url :'/customize',
                            subcategories:[
                                {
                                    headline: 'featured',
                                    img: '/images/category-dropdown-customize.jpg',
                                    links:[
                                        { text: 'new ARRIvals', url: '/new-arrivals' },
                                        { text: 'best sellers', url: '/best-arrivals' },
                                        { text: 'release fates', url: '/new-arrivals' },
                                        { divider: true },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { text: 'P.o.d system', url: '/new-arrivals' },
                                        { divider: true },                                        
                                        { text: 'Sale', url: '/new-arrivals', bold: true },
                                    ]
                                },
                                {
                                    headline: 'shoes',
                                    img: '/images/category-dropdown-customize.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'chothing',
                                    img: '/images/category-dropdown-customize.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'accessories',
                                    img: '/images/category-dropdown-customize.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                },
                                {
                                    headline: 'sports',
                                    img: '/images/category-dropdown-customize.jpg',
                                    links:[
                                        { text :'originals' , url :'/originals' },
                                        { text :'running' , url :'/originals' },
                                        { text :'workout' , url :'/originals' },
                                        { text :'essentials' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                        { text :'hiking' , url :'/originals' },
                                    ]
                                }
                            ]
                        },
                    ]
                ],

                bagProducts:[
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg',
                        title: "The Avalee Gold Ring",
                        size: '5',
                        qty: 2,
                        percentOff: 9,
                        price : 'Rs 998',
                        shipping: 178,
                        total : 1176
                    },
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg',
                        title: "The Gold Ring",
                        size: '5',
                        qty: 2,
                        percentOff: 9,
                        price : 'Rs 998',
                        shipping: 178,
                        total : 1176
                    },
                    {
                        img: 'https://cf-cdn.aucent.com/public/uploads/catalog/product/small/z/ZLR00323-6.jpg',
                        title: "The Gold Ring",
                        size: '5',
                        qty: 2,
                        percentOff: 9,
                        price : 'Rs 998',
                        shipping: 18,
                        total : 1176
                    },
                ]
            }
        },
        mounted(){
            this.listenOnRoot('sidebar::hidden', this.onSidebarHidden)
        },
        methods:{
            onSidebarHidden(){
                this.showSidebar = false                
            },
            removeBagProduct(product){
                if(this.bagProducts.indexOf(product) != -1 )
                    this.bagProducts.splice(this.bagProducts.indexOf(product) , 1)
            }
        },
        watch:{
            showSidebar(newVal){
                if(newVal)
                    this.emitOnRoot('sidebar::show')
            }
        }
    }
</script>
