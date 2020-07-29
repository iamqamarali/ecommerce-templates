<template>
    <div class="site-header-wrapper  " :class="headerWrapperClasses()">
        <div class="site-header " :class="{ 'fixed-top' : fixed }" >
            <header-top ></header-top>
            <header-middle></header-middle>
            <header-bottom></header-bottom>
        </div> 
    </div>
</template> 

<script>
import headerTop from './header-top'
import headerMiddle from './header-middle'
import headerBottom from './header-bottom'

export default {
    props: {
        fixed:{
            type: Boolean,
            default: false
        },
        fixedMd:{
            type: Boolean,
            default: false            
        },
        loggedIn:{
            type: Boolean,
            default: false
        }
    },
    components:{
        headerTop,
        headerBottom,
        headerMiddle
    },
    data(){
        return {
            
        }
    },
    methods:{
        headerWrapperClasses(){
            return { 
                    'is-fixed' : this.fixed , 
                    'is-fixed-md': this.fixedMd 
                }
        }
    }

}
</script>

