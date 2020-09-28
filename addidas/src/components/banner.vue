<template>
    <div class="banner">
        <div class="banner-img background-img" :style="'background-image:url('+ data.img +')'" ></div>

        <div class="banner-cta-container" :class="{
                    'centered': centered,
                    'color-white': color == 'white',
                    'color-black': color == 'black'
                    }" >
            <div class="banner-title" v-html="data.title"></div>
            <div class="banner-subtitle" v-if="data.subtitle" v-html="data.subtitle" ></div>
            <div class="banner-description" v-if="data.description" v-html="data.description" ></div>
            <div class="banner-buttons">
                <div class="banner-btn-container"
                    v-for="(cta, index) in data.ctas" :key="index"
                    >
                        <router-link class="btn" :class="{ 
                                'btn-white': color =='white',
                                'btn-black' : color == 'black'
                            }"
                            :to="cta.url">
                            {{cta.text}}
                            <i class=" ml-3 fi fi-5x flaticon-next" ></i>   
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'white' // white / black
        }, 
        centered: {
            type: Boolean,
            default: false
        }, 
        data :{
            type: Object,
            required: true
        }
    },
    mounted(){
    }
}
</script>

