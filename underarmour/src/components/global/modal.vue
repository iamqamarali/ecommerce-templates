<template>
    <transition name="fade-slide">
        <div class="modal-wrapper" v-if="isActive">
            <div class="modal-container">
                
                <div class="modal-body" :style="{'min-width': this.width || false}">
                    <div class="modal-content"  :style="{'min-height' : this.height || false}">
                        <component v-if="component" :is="component" v-bind="componentProps"></component>
                        <div v-else-if="content" v-html="content" ></div>
                        <slot v-else></slot>
                    </div>
                    
                    <span class="modal-close-btn" @click="close">
                        <span class="close-icon">&times;</span>
                    </span>

                    <div class="modal-loader" v-if="isLoading">
                        <div class="sk-folding-cube">
                            <div class="sk-cube1 sk-cube"></div>
                            <div class="sk-cube2 sk-cube"></div>
                            <div class="sk-cube4 sk-cube"></div>
                            <div class="sk-cube3 sk-cube"></div>
                        </div>
                    </div>

                </div>
                <div class="modal-overlay" @click="close"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props:['active', 'content', 'loading', 
            'height', 'width', 'programmatic', 
            'component', 'componentProps'
        ],
        data(){
            return {
                isLoading: this.laoding || false,
                isActive: this.active || false
            }
        },
        beforeMount(){
            this.programmatic && document.body.appendChild(this.$el)
        },
        mounted(){
            this.programmatic && this.open()
        },
        methods:{
            setLoading(val){ 
                this.isLoading = val
            },

            open(){
                this.$emit('close');
                this.$emit('update:active', true);

                this.isActive = true
            },
            close(){
                this.$emit('close');
                this.$emit('update:active', false);

                this.isActive = false
            },


        },

        watch:{
            active(newVal){
                if(newVal)
                    this.open()
                else
                    this.close()
                    
            }
        }
        
    }
</script>

<style lang="sass">

</style>