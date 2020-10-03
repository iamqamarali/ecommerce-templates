<template>
    <div class="listing-page">
        <div class="container-fluid">
            <div class="listing-page-header mb-lg-4">
                <breadcrumb :links="pathLinks" class="mt-3 " />
                <h2 class="listing-page-title title ">{{ page.title }}</h2>
                <span class="listing-page-products-count float-right mt-3">({{ page.products_count }} products)</span>
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
                                        :filter="filters.styles"
                                        v-on:change="stylesChanged"
                                        :selected.sync="selectedFilters.styles" />
                                    <filter-widget 
                                        :filter="filters.price"

                                        :range.sync="filters.price.range"
                                        :range-opts="filters.price.rangeOpts"
                                        :range-filter="true"     
                                    />
 
                                    <filter-widget 
                                        :filter="filters.size" 
                                        multiple 
                                        grid 
                                        :selected.sync="selectedFilters.size"
                                    />
                                    <filter-widget
                                            :filter="filters.stone_color"
                                            v-on:change="stone_colorChanged"
                                            :selected.sync="selectedFilters.stone_color" />
                                    <filter-widget
                                            :filter="filters.metal_color"
                                            v-on:change="metal_colorChanged"
                                            :selected.sync="selectedFilters.metal_color" />
                                    <filter-widget
                                            :filter="filters.occasion"
                                            v-on:change="occasionChanged"
                                            :selected.sync="selectedFilters.occasion" />

                                </div>   
                        </div>
                    </div>
                    <div class="col-lg ">
                            <div class="listing-page-filters-buttons-wrapper" :class="{ 'is-fixed': filtersButtonsFixed }" >
                                <div class="listing-page-filters-buttons-container" :class="{'fixed-top': filtersButtonsFixed }">
                                        <no-ssr>
                                                <button class="btn d-lg-none btn-outline-white listing-page-filters-btn"
                                                    @click="showFilters = !showFilters">
                                                    Filter By
                                                    <i class="fi flaticon-caret-down fi-1x mt-1 float-right"></i>
                                                </button>  

                                                <dropdown right
                                                    ref="sortBy_dropdown"
                                                    class="  site-dropdown listing-page-sort-dropdown ">
                                                    <button type="button" class="btn btn-outline-white btn-block btn-gray" slot="toggler">
                                                        {{ selected_sortBy == null ? 'Sort By' : selected_sortBy.text }}
                                                        <i class="fi flaticon-caret-down fi-1x mt-1 float-right"></i>
                                                    </button>

                                                    <div slot="menu">
                                                        <a class="dropdown-item"
                                                            :href="s.href"
                                                            v-for="(s, index) in sort_by" :key="index"
                                                            @click="$refs.sortBy_dropdown.close(); selected_sortBy = s"
                                                            >
                                                            {{ s.text }}
                                                        </a>
                                                    </div>
                                                </dropdown>

                                        </no-ssr>                       
                                </div>
                            </div>                   

                            <div class="listing-page-tags">
                               
                                    <tag :text="selectedFilters.styles.text"
                                        :data="selectedFilters.styles"
                                        v-if="selectedFilters.styles"
                                        @removed="filterRemoved($event , 'styles')" />
                                        
                                    <tag :text="selectedFilters.price.text"
                                        :data="selectedFilters.price"
                                        v-if="selectedFilters.price"
                                        @removed="filterRemoved($event , 'price')"/>

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
                                <tag
                                        v-for="(s, index) in selectedFilters.stone_color" :key="index+'stone_color'"
                                        :text="s.text"
                                        :data="s"
                                        @removed="filterRemoved($event , 'stone_color', true)"
                                />
                                <tag :text="selectedFilters.metal_color.text"
                                     :data="selectedFilters.metal_color"
                                     v-if="selectedFilters.metal_color"
                                     @removed="filterRemoved($event , 'metal_color')"/>

                                <tag :text="selectedFilters.occasion.text"
                                     :data="selectedFilters.occasion"
                                     v-if="selectedFilters.occasion"
                                     @removed="filterRemoved($event , 'occasion')"/>

                                <a href="#" @click.prevent="clearAllFilters" class="site-link ml-1">Clear All</a>
                            </div>
                            <div class="clearfix"></div>


                            <div class="listing-page-products-wrapper">
                                <div class="row no-gutters">
                                    <div class=" col-6 col-md-4"
                                        v-for="(product, index) in products" :key="index">
                                        <product :product="product" listing-product />
                                    </div>
                                </div>
                                
                                <div class="text-center mt-5">
                                    <button class="btn btn-primary load-more-products-btn">Load more</button>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        
        <product-services></product-services>
    </div>
</template>
 
<script>
import breadcrumb from '@/components/breadcrumb'
import filterWidget from '@/components/listing/filter'
import product from '@/components/listing/listing-product'
import tag from '@/components/tag'
import productServices from '@/components/listing/product-services'
import dropdown from '@/components/dropdown'
 
export default {
    components:{
        dropdown,
        breadcrumb,
        filterWidget,
        product,
        tag,
        productServices
    },
    data(){
        return {
            showFilters: false,
            filtersButtonsFixed: false,
            selected_sortBy: null,

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
                styles:{
                    title: 'style',
                    options: [
                        { text:'Band / Eternity Ring', value:'band-eternity-ring', products_count: 50 },
                        { text:'Cocktail / Fancy', value:'cocktail-fancy', products_count: 90 },
                        { text:'Fashion', value:'fashion', products_count: 20 },
                        { text:'Pave', value:'pave', products_count: 80 },
                        { text:'Pearl', value:'pearl', products_count: 70 },
                        { text:'Solitaire', value:'solitaire', products_count: 40 },
                    ]
                },
                stone_color:{
                    title: 'stone color',
                    options:[
                        {text:'Black' , value:'black', products_count: 50 },
                        {text:'Grey' , value:'grey', products_count: 50 },
                        {text:'Brown' , value:'brown', products_count: 50 },
                        {text:'Green' , value:'green', products_count: 50 },
                        {text:'Yellow' , value:'yellow', products_count: 50 },
                    ]
                },
                price:{
                    title : 'price',
                    range: [1200, 5000],
                    rangeOpts :{
                        min: 1000,
                        max: 10000,
                        tooltip: 'hover',
                        formatter: 'RS {value}',
                        prefix: 'RS'
                    }
                },
                metal_color:{
                    title : 'metal color',
                    options:[
                        {text:'Terrex' , value:'terrex', products_count: 50},
                        {text:'Boost' , value:'boost', products_count: 50},
                        {text:'Pureboost' , value:'pureboost', products_count: 50},
                        {text:'Ultraboost' , value:'ultraboost', products_count: 50},
                        {text:'abc' , value:'ultraboost', products_count: 50},
                        {text:'blah' , value:'ultraboost', products_count: 50}
                    ]
                },
                occasion:{
                    title : 'occasion',
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
                {text: 'Price [low - high]', href:"#"},
                {text: 'Newest first' ,  href:"#" },
                {text: 'Price [high - low]' ,  href:"#" },
            ],
            selectedFilters:{
                gender: null,
                category: null,
                frenchise: [],
                size: []
            },

            products:[
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    label: 'new',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                        {
                            front: '/images/23692_1.png',
                            back: '/images/23692_1.png'
                        },
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    original_price: '$150',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
                            back: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw437d7dee/zoom/CX0004_23_hover_model.jpg?sw=230&strip=false&sh=280&strip=false&sw=280'
                        }
                    ]
                },
                {
                    category: "Women's Necklace",
                    title: "SET N+E SM BLOCK BK ENAME-GLD-CHAMP",
                    price: 'Rs 7,700',
                    /*colors_count: 3,
                    review_count : 480,*/
                    similar_url : '/asd',
                    images_groups:[
                        {
                            front: '/images/23692_1.png',
                            back : '/images/23692_2.png',
                        },
                        {
                            front: '/images/23692_1.png',
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
                if(window.scrollY > 240 ){
                    if(!this.filtersButtonsFixed)
                        this.filtersButtonsFixed = true
                }
                else
                    this.filtersButtonsFixed = false
            })
        }
    },
    methods:{
        stylesChanged(gender){
        },
        stone_colorChanged(category){
        },
        priceChanged(frenchise){
        },
        sizeChanged(s){
        },
        metal_colorChanged(s){
        },
        occasionChanged(s){
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
           this.selectedFilters.styles = null
           this.selectedFilters.price = null
           this.selectedFilters.stone_color = []
           this.selectedFilters.size = []
           this.selectedFilters.metal_color = null
           this.selectedFilters.occasion = null
        }
    }

}
</script>
