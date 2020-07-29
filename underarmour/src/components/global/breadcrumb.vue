<template>
    <ul class="breadcrumb">
        <li class="breadcrumb-item" v-for="(link, index) in data" :key="index">
            <a :href="link.url"> {{ link.text }} </a>
        </li>
    </ul>
</template>

<script>
export default {
    props:['data']    
}
</script>

