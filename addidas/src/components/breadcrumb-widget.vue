<template>
    <div class="breadcrumb-widget-wrapper">

        <div class="breadcrumb-back-link">
            <i class="fi flaticon-reply mr-2"></i>
            <a :href="links.back"  v-if="links.back">Back</a>
        </div>

        <b-breadcrumb class="breadcrumb-widget" :items="links.path" />
    </div>
</template>

<script>
    export default {
        props: ['links']        
    }
</script>

