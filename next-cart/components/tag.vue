<template>
    <div class="tag" v-if="isActive">
        <span @click.prevent="remove" class="tag-close-icon">&times;</span>
        <span class="tag-text">{{ text }}</span>
    </div>
</template>

<script>
    export default {    
        props: ['data' , 'text'],
        data(){
            return {
                isActive: true
            }
        },
        methods:{
            remove(){
                this.$emit('removed', this.data )
            }
        }
    }
</script>
