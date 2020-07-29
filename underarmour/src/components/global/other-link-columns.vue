<template>
    <div class="other-link-columns">
        <div class="section">
            <div class="container">

                <div class="row">
                    <div class="col-md-3" v-for="(column, index) in links" :key="index">
                        <h5 class="other-link-title secondry-font">{{ column.title  }}</h5>
                        <ul class="nav flex-column other-link-nav  ">
                            <li class="nav-item"
                                v-for="(link, index) in column.links" :key="index"
                                >
                                <a :href="link.url" class="nav-link">{{ link.text }}</a>    
                            </li>        
                        </ul>            
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['links']
    }
</script>

<style lang="sass">

</style>


