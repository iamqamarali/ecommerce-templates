export default {
    mounted() {
        this.$root.$el.addEventListener('click', this._clickOutHandler)
    },
    beforeDestroy () {
        this.$root.$el.removeEventListener('click', this._clickOutHandler)
    },
    methods:{
        _clickOutHandler(e){
            if(!this.$el.contains(e.target))
                this.clickOutHandler()
        }
    }
}