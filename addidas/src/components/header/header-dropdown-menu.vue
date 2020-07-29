<template>        
        <div class="dropdown-menu category-dropdown-menu">
            <div class="row">
                <div class="col-lg"
                    v-for="(subcategory, index) in category.subcategories" :key="index"
                    >
                    <div class="subcategory subcategory-mobile-dropdown"
                        :class="{ active : activeHeadline == category.text + subcategory.headline }"
                        >

                            <div class="subcategory-headline"                                
                                @click="toggleActiveHeadline(category.text, subcategory.headline)">
                                {{ subcategory.headline }}
                                <i class="fi flaticon-down-arrow d-none-lg " ></i>
                            </div>

                            <div class="subcategory-dropdown-content">
                                <div class="subcategory-img-container" v-if="subcategory.img">
                                    <img :src="subcategory.img" alt="" class="subcategory-img">
                                </div>
                                <ul class="subcategory-nav">
                                    <li
                                        v-for="(link, index) in subcategory.links" :key="index"
                                        :class="{'subcategory-divider' : link.divider }"
                                        >
                                        <a :href="link.url" v-if="!link.divider" >{{ link.text }}</a>
                                    </li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['category'],
        data(){
            return {
                activeHeadline: ''
            }
        },
        methods:{
            toggleActiveHeadline(categoryText, subcategoryHeadline){
                this.activeHeadline = this.activeHeadline == categoryText + subcategoryHeadline
                                    ? ''
                                    : categoryText + subcategoryHeadline
                console.log(this.activeHeadline);
            }
        }
    }
</script>
