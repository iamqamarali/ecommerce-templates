<template>
    <div class="category-slider-wrapper">
        <div class="category-slider-header">
            <h5 class="header-heading title" style="font-weight: 400">{{ heading }}</h5>
            <div class="header-horizontal-line"></div>
        </div>

        <div class="category-slider-menu-wrapper">
                <ul class="nav category-slider-menu">
                    <li class="nav-item  menu-item"
                        v-for="(item, index) in menuItems" :key="index">

                        <nuxt-link to="/listing" class="nav-link menu-link">
                            <img :src="item.img" alt="" class=" menu-item-img  img-fluid">
                            <div class="menu-item-text">{{ item.text }}</div>
                        </nuxt-link>

                    </li>
                </ul>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['heading', 'menuItems'],
    }
</script>

