<template>
    <div class="breadcrumb-wrapper">

        <div class="breadcrumb-back-link">
            <i class="fi flaticon-back-arrow mr-1"></i>
            <a :href="links.back"  v-if="links.back">Back</a>
        </div>

         <ol class="breadcrumb">
            <li class="breadcrumb-item"  
                v-for="(link, index) in links.path" :key="index"
                :class="{ 'active' : link.active }"
                >
                <a :href="link.href" v-if="!link.active">{{link.text}}</a>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: ['links']        
    }
</script>

