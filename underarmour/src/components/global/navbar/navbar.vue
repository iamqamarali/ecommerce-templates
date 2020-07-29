<template>
    <div id="navbar">

        <!--======== padding-for-fixed-nav ==========-->
        <div v-if="fixed" class="padding-for-fixed-nav" ></div>

        <div class="fixed-top" :class="{'active' : fixed }" >
            <div class="navbar-wrapper" :class="{'sidebar-opened': showSidebar}">
                
                    <message-nav></message-nav>

                    <!-- Main Navbar -->
                    <div class="main-navbar navbar navbar-expand-md  navbar-light ">

                        <button class="navbar-toggler" @click="showSidebar = !showSidebar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="" class="navbar-brand">
                            <div class="logo navbar-logo"></div>
                        </a>


                        <!--  Navigation links -->
                        <nav-links :nav-data="navData"></nav-links>

                        <!-- nav-end  -->
                        <search-icon-nav></search-icon-nav>

                    </div>
            </div>
        </div>
 
    </div>
</template>

<script>
import messageNav from './message-nav'
import navLinks from './nav-links'
import searchIconNav from './search-icon-nav'

export default {
    props:{
        fixed:{
            type: Boolean,
            default: true
        }
    },
    components:{
        messageNav,
        navLinks,
        searchIconNav
    },
    data(){
        return {
            showSidebar: false,

            navData:[
                {
                    title: 'men',
                    url: '/men',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]

                },
                {
                    title: 'Women',
                    url: '/women',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]

                },
                {
                    title: 'Boys',
                    url: '/boys',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]

                },
                {
                    title: 'Girls',
                    url: '/girls',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]

                },
                {
                    title: 'Shoes',
                    url: '/shoes',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]
                },
                {
                    title: 'outlet',
                    url: '/outlet',
                    collections: [
                        {
                            text: 'NEW ARRIVALS',
                            url: '/asd'
                        },
                        {
                            text: 'BEST SELLERS',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: 'PROJECT ROCK COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'BE SEEN COLLECTION',
                            url: '/asd'
                        },
                        {
                            text: 'NFL COMBINE AUTHENTIC',
                            url: '/asd'
                        },
                        {
                            text: 'COLLEGE FAN GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'UA HOVR™',
                            url: '/asd'
                        },
                        {
                            text: 'ATHLETE RECOVERY',
                            url: '/asd'
                        },
                        {
                            text: 'UA ICON CUSTOMIZED GEAR',
                            url: '/asd'
                        },
                        {
                            text: 'ARMOURBOX: BUILT FOR YOU',
                            url: '/asd'
                        },
                        {
                            space: true
                        },
                        {
                            text: "SHOP ALL MEN'S",
                            url: '/asd'
                        },

                    ],
                    subCategories:[
                        {
                            title: 'Shoes',
                            url: '/shoes',
                            links:[
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                },
                                {
                                    text :'Running',
                                    url : '/asd'
                                }
                            ]
                        },
                        {
                            title: 'Tops',
                            url: '/tops',
                            links:[
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                                {
                                    text :'Jackets & Vests',
                                    url : '/jackets'
                                },
                            ]
                        },
                        {
                            title: 'Bottoms',
                            url : '/bottoms',
                            links:[
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                                {
                                    text :'Pants',
                                    url : '/pants'
                                },
                            ]
                        },
                        {
                            title: 'Accessories',
                            url : '/accessories',
                            links:[
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                {
                                    text :'Backpacks',
                                    url : '/back'
                                },
                                
                            ]
                        },
                    ]
                },

            ]
        }
    }
}
</script>

<style >

</style>