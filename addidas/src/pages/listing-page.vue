<template>
    <div class="listing-page">
        <div class="container-fluid">

            <div class="listing-page-header">
                <breadcrumb-widget :links="pathLinks" class="mt-3 d-none d-lg-flex" />
                <h2 class="listing-page-title title ">{{ page.title }}</h2>
                <span class="listing-page-products-count">({{ page.products_count }} products)</span>
            </div>

            <div class="row">
                <div class="col-lg-auto listing-page-filters-column">
                    <div class="listing-page-filters-wrapper" :class="{ 'show' : showFilters }">
                            <div class="listing-page-filters">
                                <div class="listing-page-filters-title">
                                    refine
                                    <span class="listing-page-filters-close-icon d-lg-none"
                                        @click="showFilters = ! showFilters">
                                        &times;
                                    </span>    
                                </div>

                                <filter-widget 
                                    :filter="filters.gender" 
                                    v-on:change="genderChanged" 
                                    :selected.sync="selectedFilters.gender" />
                                <filter-widget 
                                    :filter="filters.category" 
                                    v-on:change="categoryChanged"
                                    :selected.sync="selectedFilters.category" />
                                <filter-widget 
                                    :filter="filters.franchise" 
                                    multiple
                                    :selected.sync="selectedFilters.frenchise" />
                                <filter-widget 
                                    :filter="filters.size" 
                                    multiple 
                                    grid 
                                    :selected.sync="selectedFilters.size"
                                />
                                <!--
                                    <filter :filter="filters.colors" multiple grid></filter>
                                    <filter :filter="filters.priceRanges"></filter>
                                    <filter :filter="filters.sport" multiple></filter>
                                -->
                            </div>   
                        </div>
                </div>
                <div class="col-lg ">
                        <div class="listing-page-filters-buttons-wrapper" :class="{ 'is-fixed': filtersButtonsFixed }" >
                            <div class="listing-page-filters-buttons-container" :class="{'fixed-top': filtersButtonsFixed }">
                                    <button class="btn d-lg-none flex-grow-1 btn-outline-white listing-page-filters-btn"
                                        @click="showFilters = !showFilters">
                                        Filter By
                                        <i class="fi flaticon-caret-down fi-1x float-right"></i>
                                    </button>  

                                    <b-dropdown no-caret   variant="primary"  
                                    class=" site-dropdown dropdown-right flex-grow-1 listing-page-sort-dropdown d-md-block d-lg-inline-block">
                                        <template slot="button-content">
                                            sort by
                                            <i class="fi flaticon-caret-down fi-1x float-right"></i>
                                        </template>
                                        <b-dropdown-item
                                            :href="s.href" 
                                            v-for="(s, index) in sort_by" :key="index"
                                            >
                                            {{ s.text }}
                                        </b-dropdown-item>
                                    </b-dropdown>                            
                            </div>
                        </div>
                        

                        <div class="listing-page-tags">
                                <tag :text="selectedFilters.gender.text" 
                                    :data="selectedFilters.gender" 
                                    v-if="selectedFilters.gender"
                                    @removed="filterRemoved($event , 'gender')" />
                                    
                                <tag :text="selectedFilters.category.text" 
                                    :data="selectedFilters.category" 
                                    v-if="selectedFilters.category"
                                    @removed="filterRemoved($event , 'category')"/>

                                <tag 
                                    v-for="(f, index) in selectedFilters.frenchise" :key="index+'frenchise'"
                                    :text="f.text" 
                                    :data="f" 
                                    @removed="filterRemoved($event , 'frenchise', true)"
                                    />

                                <tag 
                                    v-for="(s, index) in selectedFilters.size" :key="index+'size'"
                                    :text="s.text" 
                                    :data="s" 
                                    @removed="filterRemoved($event , 'size', true)"
                                    />

                                <a href="#" @click.prevent="clearAllFilters" class="site-link ml-1">Clear ALl</a>                            
                        </div>
                        <div class="clearfix"></div>


                        <div class="listing-page-products-wrapper">
                                <div class="row no-gutters">
                                    <div class=" col-6 col-md-4 col-xl-3"
                                        v-for="(product, index) in products" :key="index"
                                        >
                                        <product :product="product" listing-product />
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
    
        </div>
    </div>
</template>
 
<script>
import breadcrumbWidget from '../components/breadcrumb-widget'
import filterWidget from '../components/filter'
import product from '../components/product'
import tag from '../components/tag-widget'

export default {
    components:{
        breadcrumbWidget,
        filterWidget,
        product,
        tag
    },
    data(){
        return {
            showFilters: false,
            filtersButtonsFixed: false,

            pathLinks:{
                back: '/home',
                path:[
                    { text: 'Home', href : '/home'},
                    { text: 'Women', href : '/women'},
                    { text: 'New arrivals', active: true}
                ]
            },
            page:{
                title: 'Women',
                products_count: 367
            },

            filters:{
                gender:{
                    title: 'gender',
                    options: [
                        { text:'Men', value:'men', products_count: 50 },
                        { text:'Women', value:'women', products_count: 50 },
                        { text:'Kids', value:'kids', products_count: 50 },
                    ]
                },
                category:{
                    title: 'category',
                    options:[
                        {text:'Apparel' , value:'apparel', products_count: 50 },
                        {text:'Shoes' , value:'shoes', products_count: 50 },
                        {text:'Accessories' , value:'accessories', products_count: 50 }
                    ]
                },
                franchise:{
                    title : 'franchise',
                    options:[
                        {text:'Terrex' , value:'terrex', products_count: 50},
                        {text:'Boost' , value:'boost', products_count: 50},
                        {text:'Pureboost' , value:'pureboost', products_count: 50},
                        {text:'Ultraboost' , value:'ultraboost', products_count: 50},
                        {text:'abc' , value:'ultraboost', products_count: 50},
                        {text:'blah' , value:'ultraboost', products_count: 50}
                    ]
                },
                size: {
                   title: 'size',
                   options:[
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                       {text: '44/30', value: '44/33'},
                   ] 
                }
            },
            sort_by:[
                {text: 'Price [low - high]', href:"/asdasd"},
                {text: 'Newest first' ,  href:"/asdasd" },
                {text: 'Top sellers' ,  href:"/asdasd" },
                {text: 'Price [high - low]' ,  href:"/asdasd" },
                {text: 'Customer Top Rated' ,  href:"/asdasd" },                
            ],
            selectedFilters:{
                gender: null,
                category: null,
                frenchise: [],
                size: []
            },

            products:[
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    label: 'new',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        },
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    original_price: '$150',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Training",
                    title: "don't rest iteration bra",
                    price: '$120',
                    colors_count: 3,
                    review_count : 480,
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw85bada05/zoom/DH7095_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back : 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2df4a341/zoom/DH7095_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                        },
                        {
                            front: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw224a440e/zoom/CX0004_000_plp_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
            ],
            
            
        }
    },
    mounted(){
        if(typeof window != 'undefined'){
            window.addEventListener('scroll', ()=>{
                if(window.scrollY > 140 ){
                    if(!this.filtersButtonsFixed)
                        this.filtersButtonsFixed = true
                }
                else
                    this.filtersButtonsFixed = false
            })
        }
    },
    methods:{
        genderChanged(gender){
        },
        categoryChanged(category){
        },
        frenchiseChanged(frenchise){
        },
        sizeChanged(s){
        },

        filterRemoved(filter , name , multiple){
            if(multiple){
                let index = this.selectedFilters[name].indexOf(filter)
                this.selectedFilters[name].splice(index , 1)
            }
            else
                this.selectedFilters[name] = null

        },

        clearAllFilters(){
           this.selectedFilters.gender = null
           this.selectedFilters.category = null
           this.selectedFilters.frenchise = []
           this.selectedFilters.size = []
        }
    }

}
</script>
