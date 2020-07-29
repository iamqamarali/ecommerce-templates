<template>
    <div class="header-bottom" >
        <b-navbar toggleable="lg" class="main-navbar" >
            <div class="container-fluid">

                    <button class="navbar-toggler toggler" 
                        :class="{ active : showNavbar}"
                        @click="showNavbar = !showNavbar"
                        >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
 
                    <b-navbar-brand href="/">
                        <img src="/images/adidas-logo.svg" class="navbar-logo" alt="">
                    </b-navbar-brand>

                    
                    <div class="collapse navbar-collapse main-navbar-sidebar" :class="{'show' :showNavbar}">
                            <ul class="nav navbar-nav category-nav">
                                <template v-for="(categoryGroup, i) in categoryGroups" >
                                    <li class="nav-item dropdown"  
                                        :class="{ open : selectedDropdown == category.text }"
                                        v-for="(category, index) in categoryGroup" :key="(index+1) * (i+3 *2)"                                        
                                        >
                                        <a :href="category.url" class="nav-link"  
                                            >
                                            {{ category.text }}
                                            <i class="fi flaticon-down-arrow d-lg-none" 
                                                 @click.prevent="toggleCategoryDropdown(category.text)"
                                               ></i>
                                        </a>
                                        <header-dropdown-menu :category="category"></header-dropdown-menu>
                                    </li>
                                    <li class="nav-item nav-item-divider" v-if="i+1 != categoryGroups.length "  :key="i+100000"></li>                                
                                </template>
                            </ul>

                            <ul class="vertical-nav mobile-account-nav d-lg-none text-uppercase">
                                <li>
                                    <a href="">
                                        <i class="fi flaticon-user"></i>
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fi flaticon-facebook-placeholder-for-locate-places-on-maps"></i>
                                        Store locator
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fi flaticon-facebook-placeholder-for-locate-places-on-maps"></i>
                                        mobile apps
                                    </a>
                                </li>
                            </ul>
                    </div>
                    


                    <!-- navbar end  -->
                    <div class="navbar-end">
                        <ul class="nav">
                            <li class="nav-item nav-search-form-item">
                                <form action="" class="form-search" :class="{ open: openSearchForm }" >
                                    <div class="input-group input-group-sm">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="fi flaticon-magnifying-glass"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="search">
                                    </div>
                                </form>
                            </li>
                            <li class="nav-item nav-search-icon-item d-lg-none">
                                <a href="" class="nav-link" 
                                    :class="{ 'active' : openSearchForm }"
                                    @click.prevent="openSearchForm = !openSearchForm"
                                    >
                                    <i class="fi flaticon-magnifying-glass"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fi flaticon-shopping-bag"></i>
                                </a>
                            </li>
                        </ul>
                    </div>


            </div>
        </b-navbar>

    </div>
</template>

<script>
import headerDropdownMenu from './header-dropdown-menu'
    export default {
        components: {
            headerDropdownMenu
        },
        data(){
            return {
                openSearchForm: false,
                showNavbar: false,
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
                ]
            }
        },
        methods:{
            toggleCategoryDropdown(key){
                if(this.selectedDropdown == key){
                    this.selectedDropdown = ''
                    return 
                }
                this.selectedDropdown = key;
            }
        }
    }
</script>
