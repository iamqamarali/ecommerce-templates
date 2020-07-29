<template>
    <div class="listing-filters" >
        <ul class="nav">
            <li class="nav-item " v-for="(filter, index) in filters" :key="index">
               
                <div class="dropdown">

                        <!-- Dropdown button -->
                        <button class="btn" @click="openCloseDropdown(index)">
                            {{ filter.title }}
                            <span class="selected-filter-length" >
                                ({{ getSelectedFiltersCount(filter) }})
                            </span>
                            <i class="caret caret-down arrow"></i>
                        </button>



                        <!-- if filter is color filters -->
                        <div class="dropdown-menu  dropdown-colors-menu" v-if="filter.colorFilter" ref="filterDropdown"
                            :class="{'dropdown-menu-right': index >3 ?true: false }"
                            >
                                <a  class="color"
                                    v-for="(color, index) in filter.colors" :key="index"
                                    :href="color.value"
                                    :class="{'active': (filter.selectedFilters.indexOf(color.value) != -1 )}"
                                    @click.prevent="filterSelected(filter, color.value, filter.track)"
                                    >
                                    <img :src="color.img" class="color-img" alt="">
                                    <span class="color-name">{{ color.name }}</span>
                                </a>
                        </div>


                        <!-- Sizes filters -->
                        <div class="dropdown-menu   dropdown-sizes-menu" v-else-if="filter.sizeFilter" ref="filterDropdown" 
                            :class="{'dropdown-menu-right': index >3 ?true: false }"                    
                            >
                            <div class="row">
                                <div class="col-7">
                                    <div class="dropdown-filter-title">{{ filter.size.title }}</div>
                                    <div v-if="filter.size.message">{{ filter.size.message }}</div>
                                    <div class="dropdown-sizes" v-else >
                                        <a  
                                            class="dropdown-size-item" 
                                            v-for="(option, index) in filter.size.options" :key="index"
                                            :href="option.value" 
                                            :class="{'active': (filter.size.selectedFilters.indexOf(option.value) != -1 )}"
                                            @click.prevent="filterSelected(filter.size, option.value, filter.size.track)"
                                            >
                                            {{ option.text }}
                                        </a>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="dropdown-filter-title">{{ filter.fit.title }}</div>
                                    <div class="dropdown-fit">
                                        <a 
                                            class="dropdown-fit-item" 
                                            v-for="(option, index) in filter.fit.options" :key="index"
                                            :href="option.value" 
                                            :class="{'active': (filter.fit.selectedFilters.indexOf(option.value) != -1 )}"
                                            @click.prevent="filterSelected(filter.fit, option.value, filter.fit.track)"
                                            >
                                            {{ option.text }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

            
                        <!-- Multi column filters  -->
                        <div class="dropdown-menu  dropdown-columns-menu "  v-else-if="filter.columns" ref="filterDropdown"
                            :class="{'dropdown-menu-right': index >3 ?true: false }"
                            >
                            <div class="row no-gutters">
                                <div class="col-4" v-for="(column, index) in filter.columns" :key="index" >
                                    <a  
                                        v-for="(option, index) in column" :key="index"
                                        :href="option.value" 
                                        class="dropdown-columns-item"
                                        :class="{'active': (filter.selectedFilters.indexOf(option.value) != -1 )}"
                                        @click.prevent="filterSelected(filter, option.value, filter.track)"
                                        >
                                        {{ option.text }}
                                    </a>
                                </div>
                            </div>
                        </div>


                        <!-- if filters are normal filters  -->
                        <div class="dropdown-menu"  v-else ref="filterDropdown"
                            :class="{'dropdown-menu-right': index >3 ?true: false }"
                            >
                            <a  v-for="(option, index) in filter.options" :key="index"
                                :href="option.value" class="dropdown-item"
                                :class="{'active': (filter.selectedFilters.indexOf(option.value) != -1 )}"
                                @click.prevent="filterSelected(filter, option.value, filter.track)"
                                >
                                {{ option.text }}
                                <i class="caret caret-right ml-1 " v-if="filter.optionsCaret"></i>
                            </a>
                        </div>


                </div>

                <div class="filter-tag-wrapper" v-if="getCategoryData(filter).selectedFilters.length" >
                    <tag :text="getFilterText(filter)" 
                        :data="getCategoryData(filter)"
                        v-on:remove="onFilterRemoved"
                    />                    
                </div>                
            </li>

        </ul>
    </div>
</template>

<script>
import tag from '../global/tag'

    export default {
        props:{
            filters: Array,
        },
        components:{
            tag
        },
        methods:{
            onFilterRemoved(filters){
                this.$emit('filterRemoved', { track : filters.track, filter: filters.selectedFilters });    
                filters.selectedFilters = []
            },

            // when a filter i selected or removed accordingly
            filterSelected(category, filter, track){
                let index = category.selectedFilters.indexOf(filter);
                if(  index == -1 ){
                    this.$emit('filterAdded', { track, filter });    
                    category.selectedFilters.push(filter)
                }
                else{
                    this.$emit('filterRemoved', { track, filter });    
                    category.selectedFilters.splice(index, 1)
                }
            },


            // On button click open the dropdown
            openCloseDropdown(index){

                this.$refs.filterDropdown.forEach((dropdown, i)=>{
                    if(i != index && dropdown.classList.contains('open') )
                        dropdown.classList.remove('open')
                })

                let d = this.$refs.filterDropdown[index]
                if(d.classList.contains('open'))
                    d.classList.remove('open')
                else
                    d.classList.add('open')                
            },
            


            /**  For filters tags and counts etc */  
            getFilterText(filter){
                let sf = this.getCategoryData(filter).selectedFilters
                if(sf.length == 1)
                    return sf[0].substr(0, 5).concat('..') 
                return sf.length + "Selec.." 
            },      
            getSelectedFiltersCount(filter){
                if(filter.selectedFilters)
                    return filter.selectedFilters.length
                else if(filter.size && filter.fit )
                    return filter.size.selectedFilters.length + filter.fit.selectedFilters.length
            },
            getCategoryData(filter){
                if(filter.selectedFilters)
                    return filter
                else if(filter.size)
                    return filter.size
                else if(filter.fit)
                    return filter.fit                
            }
        }
    }
</script>

