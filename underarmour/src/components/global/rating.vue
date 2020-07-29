<template>
    <div class="rating d-inline-block">
        <ul class="nav" :title="rating + ' of 5'  " >
            <template v-for="num in 5">            
                <li class="nav-item" :key="num"  
                    v-if="num < rating+1"
                    >
                    <i class="flaticon flaticon-star"></i>
                </li>

                <li class="nav-item" :key="num"  
                    v-else >
                    <i class="flaticon flaticon-star-1"></i>
                </li>
            </template>
        </ul> 
    </div>
</template>

<script>
    export default {
        props: {
            rating:{
                type : Number,
            }
        }        
    }
</script>

<style lang="sass">
.rating
    .flaticon:before
        font-size: 16px

</style>


