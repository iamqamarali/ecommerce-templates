<template>
    <div class="filters-wrapper mb-2">


            <div class="fixed-filters" v-if="isFixed">
                <div class="filters-container">
                    <div class="container d-flex">
                        <filters :filters="filters"
                            v-on:filter-removed="filterRemoved"
                            v-on:filter-added="filterAdded"
                            >
                        </filters>

                        <search-icon-nav class="ml-auto"></search-icon-nav>
                        
                    </div>
                </div>
            </div>


            <div class="static-filters" :class="{open : openMobileFilters}">
                <filters :filters="filters" ref="filters"
                    v-on:filterRemoved="filterRemoved"
                    v-on:filterAdded="filterAdded"
                    >
                </filters>
                
                <div class="static-filters-footer d-md-none">
                    <span class="results">392 Results</span>
                    <button class="btn btn-outline-white" 
                        @click="openMobileFilters = !openMobileFilters">
                        Done
                    </button>                
                </div>
            </div>
        

            <div class="mobile-filter-buttons">
                <button class="btn btn-select mr-2  flex-grow-1 d-lg-none d-md-none" 
                    @click="openMobileFilters = !openMobileFilters">
                    Filters
                </button>
                <relevance :data="relevance" class=" flex-grow-1 d-lg-none d-md-none"></relevance>
            </div>

    </div>
</template>

<script>
import filters from './filters'
import searchIconNav from '../global/navbar/search-icon-nav'
import relevance from './relevance'

    export default {
        props:['relevance', 'products'],
        components:{
            filters,
            searchIconNav,
            relevance
        },

        data(){
            return {
                isFixed: false,
                openMobileFilters: false,

                filters:[
                    {
                        title: 'Gender',
                        track: 'gender',
                        selectedFilters : ['men'],
                        options: [
                            {
                                text: "Men's",
                                value: 'men'
                            },
                            {
                                text: "Women's",
                                value: 'women'
                            },
                            {
                                text: "Boy's",
                                value: 'boy'
                            }, 
                            {
                                text: "Girls's",
                                value: 'girl'
                            } 
                        ]
                    },
                    {
                        title: 'Category',
                        track: 'category',
                        selectedFilters : [],
                        options: [
                            {
                                text: "Tops",
                                value: 'top'
                            },
                            {
                                text: "Bottoms",
                                value: 'bottom'
                            },
                            {
                                text: "Footwears",
                                value: 'footwear'
                            }, 
                            {
                                text: "Accessories",
                                value: 'accesories'
                            } 
                        ]
                    },
                    {
                        title: 'Color',
                        colorFilter: true,
                        track: 'color',
                        selectedFilters: ['white', 'blue', 'yellow'],
                        colors: [
                            {
                                img: '/images/listing/colors/white.png',
                                name: 'White',
                                value: 'white'
                            },
                            {
                                img: '/images/listing/colors/blue.png',
                                name:'Blue',
                                value: 'blue'
                            },
                            {
                                img: '/images/listing/colors/red.png',
                                name: 'Red',
                                value: 'red'
                            }, 
                            {
                                img: '/images/listing/colors/yellow.png',
                                name: 'Yellow',
                                value: 'yellow'
                            },
                            {
                                img: '/images/listing/colors/white.png',
                                name: 'White',
                                value: 'white'
                            },
                            {
                                img: '/images/listing/colors/blue.png',
                                name:'Blue',
                                value: 'blue'
                            },
                            {
                                img: '/images/listing/colors/red.png',
                                name: 'Red',
                                value: 'red'
                            }, 
                            {
                                img: '/images/listing/colors/yellow.png',
                                name: 'Yellow',
                                value: 'yellow'
                            },
                            {
                                img: '/images/listing/colors/white.png',
                                name: 'White',
                                value: 'white'
                            },
                            {
                                img: '/images/listing/colors/blue.png',
                                name:'Blue',
                                value: 'blue'
                            },
                            {
                                img: '/images/listing/colors/red.png',
                                name: 'Red',
                                value: 'red'
                            }, 
                            {
                                img: '/images/listing/colors/yellow.png',
                                name: 'Yellow',
                                value: 'yellow'
                            },
                            {
                                img: '/images/listing/colors/white.png',
                                name: 'White',
                                value: 'white'
                            },
                            {
                                img: '/images/listing/colors/blue.png',
                                name:'Blue',
                                value: 'blue'
                            },
                            {
                                img: '/images/listing/colors/red.png',
                                name: 'Red',
                                value: 'red'
                            }, 
                        ]
                    },
                    {
                        title: 'Size & Fit',
                        sizeFilter: true,
                        size:{
                            title: 'Apparel Sizes',
                            track: 'size',
                            message: '',
                            selectedFilters: ['xl'],
                            options: [
                                {
                                    text: 'XS',
                                    value: 'xs',
                                },
                                {
                                    text: 'SM',
                                    value: 'sm',
                                },
                                {
                                    text: 'MD',
                                    value: 'md',
                                },                                
                                {
                                    text: 'LG',
                                    value: 'lg',
                                },                                
                                {
                                    text: 'XL',
                                    value: 'xl',
                                },                                
                            ]
                        },
                        fit:{
                            title: 'Fit',
                            track: 'fit',
                            selectedFilters: ['compression'],
                            options:[
                                {
                                    text: 'Compression',
                                    value: 'compression'
                                },
                                {
                                    text: 'Fitted',
                                    value: 'fitted'
                                },
                                {
                                    text: 'Loose',
                                    value: 'loose'
                                },
                            ]
                        }
                    },
                    {
                        title: 'Sport',
                        track: 'sport',
                        selectedFilters: ['golf'],
                        columns:[
                            // column 1
                            [
                                {text:'Base Ball', value: 'base-ball'},
                                {text:'Foot Ball', value: 'foot-ball'},
                                {text:'Golf ', value: 'golf'},
                            ],
                            // column 2
                            [
                                {text:'Hiking', value: 'hiking'},
                                {text:'Hunting', value: 'hunting'},
                                {text:'Golf ', value: 'a'},
                            ],
                            // column 3
                            [
                                {text:'Base Ball', value: 'asdd'},
                                {text:'Foot Ball', value: 'assd'},
                                {text:'Golf ', value: 'asad'},
                            ],
                        ]
                    },
                    {
                        title: 'Technology',
                        track: 'technology',
                        selectedFilters: [],
                        options: [
                            {
                                text: "Men's",
                                value: 'men'
                            },
                            {
                                text: "Women's",
                                value: 'women'
                            },
                            {
                                text: "Boy's",
                                value: 'boy'
                            }, 
                            {
                                text: "Girls's",
                                value: 'girl'
                            } 
                        ]
                    },

                ]
            }
        },

        mounted(){
            this.initFilters();
        },
        methods:{
            filterRemoved(data){
                console.log('added')
                console.log(data)
                // call api fetch products
                //let products = fetch()

                // update the products 
//                this.$emit('update:products', newProducts )
            },
            filterAdded(data){
                console.log('removed')
                console.log(data)

                // call api fetch products
                //let products = fetch()

                // update the products 
                //this.$emit('update:products', products )
            },
            initFilters(){
                ((codeCanRun)=>{

                    if(!codeCanRun)
                        return false

                    window.addEventListener('scroll', ()=>{
                        if( window.pageYOffset >= this.$refs.filters.$el.offsetTop){
                            if(!this.isFixed)
                                this.isFixed = true
                        }
                        else{
                            this.isFixed = false                
                        }
                    })


                })(( (typeof window == 'object' && typeof document == 'object')? true : false ))
            }
        }
    }
</script>
