<template>
    <div class="site-header-wrapper  " :class="headerWrapperClasses()">
        <div class="site-header " :class="{ 'fixed-top' : fixed }" >
            <header-top ></header-top>
            <header-bottom></header-bottom>
            <header-message-bar v-if="messageBar" />
        </div>
    </div>
</template>

<script>
import headerTop from './header-top'
import headerBottom from './header-bottom'
import headerMessageBar from './header-message-bar'

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
        messageBar:{
            type: Boolean,
            default: false                        
        }
    },
    components:{
        headerTop,
        headerBottom,
        headerMessageBar
    },
    data(){
        return {
            
        }
    },
    methods:{
        headerWrapperClasses(){
            return { 
                    'is-fixed' : this.fixed , 
                    'is-fixed-md': this.fixedMd , 
                    'has-message-bar': this.messageBar 
                }
        }
    }

}
</script>

