<template>
    <div class="filter-wrapper">
        <div class="filter">
            <div class="filter-title" @click="showCollapse = !showCollapse">
                {{ filter.title }}
                <i class="fi flaticon-down-arrow float-right font-weight-bold"></i>
            </div>

            <b-collapse v-model="showCollapse" id="d">
                <ul class="filter-options"
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
                                <i class="fi fi-6x mr-2" 
                                    v-if="!grid"
                                    :class="{ 'flaticon-check': !isSelected(option),
                                            'flaticon-check-1': isSelected(option) }">
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
            </b-collapse>

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            filter:{
                type: Object,
                required: true
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
                required: false
            },
        },
        data(){
            return {
                showCollapse: true,
                sf: null,
            }
        },
        created(){
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
            }
        }

    }
</script>
