<template>
    <div class="user-layout">
         <site-header :fixed="true" :loggedIn="true"></site-header>
        
        <div class="main-content"> 
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col-lg-3">
                        <div class="user-layout-left mr-lg-3"
                            :class="{ show : showMenu }"
                            @click.self="toggleMenu()">

                            <ul class="left-menu">
                                <li class=" menu-item order-track">
                                    <h5 class="menu-item-heading">Track my Order</h5>
                                    <form action="" class="order-search-form d-flex">
                                        <input type="text" class="form-control">
                                        <button class="btn btn-primary">GO</button>
                                    </form> 
                                </li>
                                
                                <li class="menu-item">
                                    <div class="menu-item-heading">
                                        <i class="fi flaticon-test"></i>
                                        Orders
                                    </div>
                                    <ul class="submenu">
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/purchases" class="active">My Order</nuxt-link>
                                        </li>
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/return-requests">Return Requests</nuxt-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="menu-item">
                                    <div class="menu-item-heading">
                                        <i class="fi flaticon-settings"></i>
                                        Settings
                                    </div>
                                    <ul class="submenu">
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/edit">Personal Information</nuxt-link>
                                        </li>
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/change-password">Change Password</nuxt-link>
                                        </li>
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/shipping-address">Shipping Address</nuxt-link>
                                        </li>
                                        <li class="submenu-item">
                                            <nuxt-link to="/user/subscriptions">Subscriptions</nuxt-link>
                                        </li>                                        
                                        <li class="submenu-item">
                                            <a href="/user/logout">Logout</a>
                                        </li>                                        
                                    </ul>
                                </li>


                            </ul>

                        </div>
                    </div>  
                    <div class="col-lg-9  ">
                        <div class="user-layout-right">
                            <nuxt/>
                            <button type="button" class="cursor-pointer left-menu-toggler toggler d-lg-none" 
                                @click="toggleMenu()"
                                >
                                <span class="icon-circle"></span>
                                <span class="icon-circle"></span>
                                <span class="icon-circle"></span>
                            </button>
                        </div>            
                    </div>
                </div>
            </div>

        </div>

        <site-footer></site-footer>
    </div>
</template>

<script>
import siteHeader from '@/components/header/site-header'
import siteFooter from '@/components/footer/site-footer'
import rootEventHandler from '@/mixins/rootEventHandler'

export default {
    mixins:[rootEventHandler],
    components:{
        siteHeader,
        siteFooter
    },
    data(){
        return {
            showMenu: false
        }
    },
    methods:{
        toggleMenu(){
            this.showMenu = !this.showMenu
            if(this.showMenu)
                this.$el.classList.add('remove-scrollbar')
            else
                this.$el.classList.remove('remove-scrollbar')
        }
    }
}
</script>

