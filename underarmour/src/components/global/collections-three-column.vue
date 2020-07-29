<template>
    <div class="collections collections-three-column">
        <div class="row no-gutters">
            <div class="col-sm-4" v-for="(collection, index) in collections" :key="index">                
                <div class="card ">
                    <div class="img-container">
                        <img :src="collection.img" alt="" class="card-img-top">
                        <div class="card-img-overlay ">
                            <a :href="collection.link" class="btn btn-outline-white">{{ collection.linkText }}</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props :{
            collections: Array
        }
        
    }
</script>

<style >

</style>