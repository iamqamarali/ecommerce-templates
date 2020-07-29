<template>
    <div >
        <site-header :fixed="true" :logged-in="true"></site-header>
        <nuxt/>
        <site-footer></site-footer>
    </div>
</template>
<script>
import siteHeader from '@/components/header/site-header'
import siteFooter from '@/components/footer/site-footer'
import rootEventHandler from '@/mixins/rootEventHandler'

export default {
    mixins:[rootEventHandler],
    components:{
        siteHeader,
        siteFooter
    },
    head(){
        return {
            link:[
            ],
            script:[
                
            ]
        }   
    },
    data(){
        return {
        }
    },

    mounted(){

    }
}
</script>
