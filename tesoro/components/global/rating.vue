<template>
    <div class="rating d-inline-block">
        <ul class="nav" :title="rating + ' of 5'  " >
            <template v-for="num in 5">            
                <li class="nav-item" :key="num"  
                    v-if="num < rating+1"
                    >
                    <i class="fi flaticon-star"></i>
                </li>

                <li class="nav-item" :key="num"  
                    v-else >
                    <i class="fi flaticon-star-half-empty"></i>
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


