<template>
    <div class="header-subdropdown" :class="{ open: dropdownMenuOpen }" >
        <h5 class="subdropdown-headline" @click="toggleDropdownMenu($event)">
            {{ headline }}
            <i class="fi flaticon-down-chevron dropdown-arrow float-right d-md-none d-lg-none"></i>
        </h5>                            
        <div class="subdropdown-menu-container">
            <ul class="vertical-nav subdropdown-menu">
                <li class=""
                    v-for="(link, index) in links" :key="index">
                    <nuxt-link to="/listing" class="">{{ link.text }}</nuxt-link>
                </li>
            </ul>
        </div>                                    
    </div>
</template>

<script>
import dropdownMixin from '@/mixins/dropdown'
export default {
    props:['headline', 'links'],
    mixins:[dropdownMixin],
}
</script>
