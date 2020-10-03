<template>
    <li class="nav-item dropdown header-dropdown" :class="{ open: dropdownMenuOpen }">
        <a :href="data.href" class="nav-link" @click="toggleDropdownMenu($event)">
            <i class="fi flaticon-shipped fs-8x mr-3 d-lg-none icon "></i>
            {{ data.text }}
            <i class="fi flaticon-down-chevron ml-1 fs-1x"></i>
        </a> 
 
        <div class="dropdown-menu header-dropdown-menu">
            <div class="dropdown-menu-container">
                <div class="row no-gutters">
                    <div class="col-lg-8 ">
                        <div class="row no-gutters">
                                <div class="col-lg-4"
                                    v-for="(column, index) in data.columns" :key="index"
                                    >
                                    <div class="header-subdropdown-container">
                                        <header-subdropdown
                                            :headline="column.headline"
                                            :links="column.links"
                                        ></header-subdropdown>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="col-lg-4 ">
                        <div class="dropdown-menu-other-options-container">
                            <a  v-for="(other_option, index) in data.other_options" :key="index"
                                :href="other_option.href" class="other-option"
                            >
                                <div class="background-img other-option-img"
                                    :style="{ 'background-image': 'url('+other_option.img+')' }">
                                </div>
                                <div></div>
                                <span class="other-option-text">{{ other_option.text }}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </li>

</template>

<script>
import headerSubdropdown from './header-subdropdown'
import dropdownMixin from '@/mixins/dropdown'

export default {
    components:{
        headerSubdropdown
    },
    mixins: [dropdownMixin],
    props:{
        data:{
            type: Object,
            required: true
        }
    },
}
</script>

