<template>
    <div class="filter-wrapper">
        <div class="filter">
            <div class="filter-title" @click="showCollapse = !showCollapse">
                {{ filter.title }}
                <i class="fi flaticon-down-chevron fs-1x mt-1 float-right font-weight-bold"></i>
            </div>
            <no-ssr> 
                <b-collapse v-model="showCollapse" id="d">
                    <!-- if filter have options -->
                    <ul class="filter-options"
                        v-if="filter.options"
                        :class="{'filter-options-grid' : grid}"
                        >
                        
                        <li class="filter-option-item"
                            v-for="(option, index) in filter.options" :key="index"
                            v-if="( !multiple && (!sf || sf == option) ) || multiple"
                            :class="{ 
                                'filter-option-item-selected': sf == option || (multiple && isSelected(option)) }">

                            <!-- not multiple -->
                            <a href="#" class="filter-option" v-if="!multiple"  @click.prevent="selection(option)" > 
                                {{ option.text }} 
                                <span class="filter-option-products-count">
                                    [{{ option.products_count }}]
                                </span>
                            </a>                    
                            <a href="#" class="filter-option-change" v-if="sf && !multiple" @click.prevent="change()"  >Change</a>


                            <!-- multiple -->
                            <a href="#" class="filter-option  filter-option-multiple"
                                v-if="multiple"  @click.prevent="toggleMultiple(option)" >
                                    
                                    <!-- checkbox -->
                                    <i class="fi fi-7x mr-2" 
                                        v-if="!grid"
                                        :class="{ 'flaticon-square': !isSelected(option),
                                                'flaticon-check': isSelected(option) }">
                                    </i>

                                    {{ option.text }}

                                    <!-- products-count -->
                                    <span 
                                        v-if="!grid&& option.products_count"
                                        class="filter-option-products-count" >
                                        [{{ option.products_count }}]
                                    </span>

                            </a>

                        </li>
                    </ul>


                    <!-- if filter is range slider -->
                    <div class="filter-range-slider p-2 pt-3 pb-4" v-if="rangeFilter">
                        <vue-slider 
                            v-model="rangeVal"
                            :min="rangeOpts.min"
                            :max="rangeOpts.max"
                            :formatter="rangeOpts.formatter"
                            :tooltip="rangeOpts.tooltip"
                            >
                        </vue-slider>
                        <div class="range-values d-flex justify-content-between px-2 mt-3 font-weight-600">
                            <span>{{ rangeOpts.prefix }} {{ rangeVal[0] }}</span>
                            <span>{{ rangeOpts.prefix }} {{ rangeVal[1] }}</span>
                        </div>
                    </div>
                </b-collapse>
            </no-ssr>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            filter:{
                type: Object,
            },
            multiple:{
                type: Boolean,
                default: false
            },
            grid:{
                type: Boolean,
                default: false,
            },
            selected: {
            },


            rangeFilter:{
                default: false
            },
            range:{

            },
            rangeOpts:{
                
            },

        },
        data(){
            return {
                showCollapse: true,
                sf: null,
                rangeVal: null
            }
        },
        created(){
            this.rangeVal = this.range
            if(this.multiple)
                this.sf = []
        },
        methods:{
            selection(sf){
                this.sf = sf
            },
            change(){
                this.sf = null
            },

            toggleMultiple(option){
                let index = this.sf.indexOf(option)
                if( index == -1 )
                    this.sf.push(option)
                else
                    this.sf.splice(index , 1);
            },

            isSelected(option){
                return this.sf.indexOf(option) != -1
            },
        },

        watch:{
            sf(newVal){
                this.$emit('change', newVal)
                this.$emit('update:selected' , newVal)
            },
            selected(newVal){
                this.sf = newVal
            },
            rangeVal(newVal){
                this.$emit('update:range', newVal)
                this.$emit('input', newVal)
            }
        }

    }
</script>
