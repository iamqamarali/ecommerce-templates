<template>
    <div class="banner">
        <div class="banner-img background-img" :style="'background-image:url('+ data.img +')'" ></div>
        <!--<div class="banner-img" >
            <a href="#" class="">
                <img :src="data.img" alt="" class=" top-banner-homepage  img-fluid">
            </a>
        </div>--> <!--need to work on this code-->

        <div v-if="data.title" class="banner-cta-container" :class="{
                    'centered': centered,
                    'color-white': color == 'white',
                    'color-black': color == 'black'
                    }" >
            <div class="banner-title" v-if="data.title" v-html="data.title"></div>
            <div class="banner-subtitle" v-if="data.subtitle" v-html="data.subtitle" ></div>
            <div class="banner-description" v-if="data.description" v-html="data.description" ></div>

            <div class="banner-btns-wrapper" v-if="data.ctas">
                <div class="banner-btns"
                    v-for="(cta, index) in data.ctas" :key="index"
                    >
                        <a class="btn" :class="{
                                'btn-white': color =='white',
                                'btn-black' : color == 'black'
                            }"
                            :href="cta.href">
                            {{cta.text}}
                        </a>
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

