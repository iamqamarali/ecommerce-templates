<template>
    <div class="collections collections-two-column">
        <div class="row no-gutters">

            <div class="col-sm-6 collection-column" v-for="(collection, index) in collections" :key="index">                
                <div class="card ">
                    <div class="img-container">
                        <img :src="collection.img" alt="" class="card-img-top">
                        <div class="card-img-overlay ">
                            <a :href="collection.link" class="btn btn-outline-white">SHOP NOW</a>
                        </div>
                    </div>
                    <div class="card-body">
                            <h4 class="collection-title secondry-font">{{ collection.title }}</h4>
                            <p class="collection-description">{{ collection.description }}</p>
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