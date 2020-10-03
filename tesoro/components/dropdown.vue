<template>
    <li class="nav-item dropdown" v-if="tag == 'li'" 
        :class="{ show : dropdownMenuOpen }">
        <div class="dropdown-toggler" @click.prevent="toggleDropdownMenu($event)">
            <slot name="toggler" ></slot>
         </div>
       

        <div class="dropdown-menu"
            :class="{ 
                'dropdown-menu-right': right,
                'show' : dropdownMenuOpen 
                }">
            <slot name="menu" ></slot>
        </div>
    </li>


    <div class="dropdown" v-else  :class="{ show : dropdownMenuOpen }" >
        
         <div class="dropdown-toggler" @click.prevent="toggleDropdownMenu($event)">
            <slot name="toggler" ></slot>
         </div>
           
        <div class="dropdown-menu"
            :class="{ 
                'dropdown-menu-right': right,
                'show' : dropdownMenuOpen 
                }">
            <slot name="menu" ></slot>
        </div>
    </div>
</template>

<script>
import dropdownMixin from '@/mixins/dropdown'

export default {
    mixins: [dropdownMixin],
    props:{
        right:{
            type: Boolean,
            default: false
        },
        tag:{
            type: String,
            default: 'div'
        }
    },
}
</script>

