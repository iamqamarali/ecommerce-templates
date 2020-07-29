<template>
    <div class="section collections collections-three-column bg-light">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-4" v-for="(collection , index) in collections" :key="index" >
                        <div class="card ">
                            <div class="img-container">
                                <img :src="collection.img" alt="" class="card-img-top">
                                <div class="card-img-overlay ">
                                    <a :href="collection.link" class="btn btn-outline-white">SHOP NOW</a>
                                </div>
                            </div>
                            <div class="card-body text-center">
                                <p class="collection-title ">{{ collection.title }}</p>
                            </div>
                        </div>          
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            collections : {
                type: Array,
                required: true
            }
        }
    }
</script>

