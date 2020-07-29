

export default {
    methods:{
        emitOnRoot(event , ...args){
            this.$root.$emit(event, args)
        },
        listenOnRoot(event, func){
            this.$root.$on(event, func)
        }
    }
}