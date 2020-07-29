
import clickOut from '@/mixins/clickOut.js'

export default {
    mixins: [clickOut],
    data (){
        return {
            dropdownMenuOpen : false
        }
    },
    methods:{
        close(){
            this.dropdownMenuOpen = false
            this.$emit('close')
        },
        open(){
            this.dropdownMenuOpen = true
            this.$emit('open')                    
        },   
        toggleDropdownMenu(e){
            e.preventDefault()

            if(this.dropdownMenuOpen){
                this.close();
            }else{
                this.open();
            }
        },
        clickOutHandler(){
            this.dropdownMenuOpen = false
            this.$emit('close')
        }
    }


}