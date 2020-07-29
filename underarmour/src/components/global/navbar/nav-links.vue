<template>
  <div class="navbar-collapse collapse navbar-sidebar ">      
        <ul class="nav nav-links mx-auto">
            <li class="nav-item" v-for="(category, index) in navData" :key="index">
                <a :href="category.url" class="nav-link" ref="dropdownButtons">
                    {{ category.title }}
                    <i class="caret caret-right arrow"></i>
                </a>

                <div class="dropdown-menu" ref="dropdownMenus">
                    <div class="container">
                        
                        <!-- Back Button -->
                        <a href="#" class="back-link d-md-none" ref="dropdownBack">Back</a>

                        <div class="row">
                            
                            <!-- Collections nav  -->
                            <div class="col-md-3">
                                <ul class="nav nav-vertical collections-nav">
                                    <li class="nav-item" v-for="(collection, index) in category.collections" :key="index"
                                        v-if="!collection.space">
                                        <a :href="collection.url" class="nav-link">{{ collection.text }}</a>
                                    </li>
                                    <li class="nav-item space" :key="index" v-else></li>
                                    
                                </ul>
                            </div>

                            <!-- Other sub category navs -->
                            <div class="col-md-9">
                                <div class="row">

                                    <div class="col-lg-3 col-md-6" v-for="(subCategory, index) in category.subCategories" :key="index">
                                        <ul class="nav nav-vertical sub-category-nav">
                                            <li class="nav-item nav-title-link">
                                                <a :href="subCategory.url" class="nav-link">{{ subCategory.title }}</a>
                                            </li>

                                            <li class="nav-item" v-for="(link, index) in subCategory.links" :key="index"
                                                v-if="!link.space">
                                                <a :href="link.url" class="nav-link">{{ link.text }}</a>
                                            </li>
                                            <li class="nav-item space" :key="index" v-else></li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['navData'],
        mounted(){
            this.$refs.dropdownButtons.forEach(el => {
                el.addEventListener('click', e => {
                    var width = window.innerWidth
                                || document.documentElement.clientWidth
                                || document.body.clientWidth;
                    if(width < 768){
                        e.preventDefault()
                        this.openDropdown(e.target)
                    }
                })
            })


            this.$refs.dropdownBack.forEach(el => {
                el.addEventListener('click', e => {
                    e.preventDefault();                    
                    this.closeDropdown(e.target)
                })
            })
        },
        methods:{
            openDropdown(el){
                let index = this.$refs.dropdownButtons.indexOf(el)
                if(index == -1)
                    return 
                let menu = this.$refs.dropdownMenus[index].classList.add('show')
            },
            closeDropdown(el){
                let index = this.$refs.dropdownBack.indexOf(el)
                if(index == -1)
                    return 
                let menu = this.$refs.dropdownMenus[index].classList.remove('show')
            }
        }
    }
</script>

