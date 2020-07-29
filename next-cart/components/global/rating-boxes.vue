<template>
    <div class="rating-boxes ">
        <ul class=" nav">
            <li class="nav-item"
                v-for="num in 7" :key="num"
                :class="{ 'active' : rating == num }"
                >
            </li>
        </ul>
        <span class="">Min</span>
        <span class="float-right">Max</span>
    </div>
</template>

<script>
    export default {
        props: ['rating']   
    }
</script>

<style lang="sass">
$box-color: #bbb


.rating-boxes
    display: inline-block
    .nav-item
        height: 7px
        width: 15px
        border-radius: 2px
        background-color: $box-color
        margin-right: 3px
    .nav-item.active
        background-color: darken($box-color, 40%)

</style>


