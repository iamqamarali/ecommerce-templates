<template>
    <div class="header-bottom   sidebar " :class="{ 'show' : showSidebar }" >
        <span class="sidebar-close-icon d-lg-none" @click="hideSidebar()">&times;</span>
        
        <div class="container-fluid">
            <div class="header-bottom-nav-wrapper">
                <ul class="nav header-bottom-nav   sidebar-nav " >
                    <header-dropdown 
                        v-for="(dropdown, index) in dropdowns" :key="index"
                        :data="dropdown">
                    </header-dropdown> 
                </ul> 
            </div>
        </div>

        <div class="sidebar-bottom d-lg-none">
            <div class="mobile-buttons-container d-flex" >
                <nuxt-link to="#" class="btn btn-outline-dark " v-if="!$parent.loggedIn" >Login</nuxt-link>
                <nuxt-link to="#" class="btn btn-outline-dark " v-if="!$parent.loggedIn">Signup</nuxt-link>

                <nuxt-link to="#" class="btn btn-outline-dark " v-if="$parent.loggedIn">My Account</nuxt-link>
                <nuxt-link to="#" class="btn btn-outline-dark " v-if="$parent.loggedIn">Logout</nuxt-link>
            </div>
            <div class="text-center mt-4 mb-2">
                <ul class="nav info-nav">
                    <li class="nav-item"><nuxt-link to="#" class="nav-link">Jewellery Care</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="#" class="nav-link">After Sale Service</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="#" class="nav-link">Exchange Policy</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="#" class="nav-link">Order and Shipping</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to="#" class="nav-link">About Us</nuxt-link></li>
                </ul>
                <div class="other-info">
                    <div class="my-1">Contact Us <span class="font-weight-600">042-222-222-222</span></div>
                    <div class="my-1"><a href="" class="text-primary">wecare@next.com</a></div>
                    <div class="my-1">11 am - 8 pm Mon - Sat</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import headerDropdown from './header-dropdown'
import rootEventHandler from '@/mixins/rootEventHandler'
    export default {
        mixins:[rootEventHandler],
        components:{
            headerDropdown
        },
        data(){
            return {
                showSidebar: false,
                dropdowns:[
                    {
                        text: 'Rings',
                        href: '/rings',
                        img: 'https://cf-cdn.aucent.com/public/uploads/menus/menu-items/menu-earrings__1092261465.jpg',
                        columns:[
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                        ],
                        other_options:[
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                        ]
                    },
                    {
                        text: 'earnings',
                        href: '/earnings',
                        img: 'https://cf-cdn.aucent.com/public/uploads/menus/menu-items/menu-earrings__1092261465.jpg',
                        columns:[
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                        ],
                        other_options:[
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                        ]
                    },
                    {
                        text: 'Pendants',
                        href: '/pendants',
                        img: 'https://cf-cdn.aucent.com/public/uploads/menus/menu-items/menu-earrings__1092261465.jpg',
                        columns:[
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                        ],
                        other_options:[
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                        ]
                    },
                    {
                        text: 'New Arrivals',
                        href: '/new arrivals',
                        img: 'https://cf-cdn.aucent.com/public/uploads/menus/menu-items/menu-earrings__1092261465.jpg',
                        columns:[
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                        ],
                        other_options:[
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                        ]
                    },
                    {
                        text: 'All jewellery',
                        href: '/pendants',
                        img: 'https://cf-cdn.aucent.com/public/uploads/menus/menu-items/menu-earrings__1092261465.jpg',
                        columns:[
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                            {
                                headline:'popular earning type',
                                links:[
                                    {text: 'Stud', href: '/stud'},
                                    {text: 'Drop', href: '/stud'},
                                    {text: 'Hoops', href: '/stud'},
                                    {text: 'Ear cuffs', href: '/stud'},
                                ]
                            },
                        ],
                        other_options:[
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                            {href: '/workwear', text: 'Workwear' , img:'https://d1fufdodc0ioc5.cloudfront.net/public/img/NextCart/rings-3.jpg'},
                        ]
                    },
                ]
            }
        },
        mounted(){
            this.listenOnRoot('sidebar::show', this.showSidebarHandler)
        },
        methods:{
            hideSidebar(){
                this.showSidebar = false
                this.emitOnRoot('sidebar::hidden')
                this.$root.$el.classList.remove('remove-scrollbar')
            },
            showSidebarHandler(){
                this.showSidebar = true
                this.$root.$el.classList.add('remove-scrollbar')
            }
        }
    }
</script>

