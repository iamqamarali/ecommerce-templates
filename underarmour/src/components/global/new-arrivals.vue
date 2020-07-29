<template>
    <div class="section new-arrivals">
        <div class="container">

            <h2 class="section-heading secondry-font">New Arrivals</h2>
            <p class="section-subheading">We’ll keep building the gear. You’ll keep getting better.</p>
            
            <div class="section-content text-center  pt-1 ">
                <a :href="arrival.link" v-for="(arrival, index) in arrivals" :key="index" class="btn btn-outline-dark">
                    {{ arrival.text }}
                </a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:['arrivals']
        
    }
</script>

<style >

</style>