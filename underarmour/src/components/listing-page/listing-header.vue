<template>
    <div class="listing-header-wrapper">
        <div class="listing-header">
            <div class="left">
                <h4 class="heading">New Arrivals</h4>
                <breadcrumb :data="data.breadcrumb"></breadcrumb>
            </div> 
            <div class="right d-none d-md-block">
                <span class="results">392 Result</span>
                <relevance :data="data.relevance"></relevance>
            </div>
        </div>
        <filters-widget :relevance="data.relevance" 
            :products.sync="backupProducts">
        </filters-widget>
    </div>
</template>

<script>
import breadcrumb from '../global/breadcrumb'
import relevance from './relevance.vue'
import filtersWidget from './filters-widget'

export default {
    props: ['data', 'products'],
    components:{
        breadcrumb,
        relevance,
        filtersWidget,
    },
    data(){
        return {
            backupProducts : this.products
        }
    },
    watch:{
        backupProducts(newVal , oldVal){
            this.$emit('update:products', newVal);
        }
    }
}
</script>

