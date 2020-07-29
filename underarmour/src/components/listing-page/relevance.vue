<template>
    <div class="relevance">
        <div class="dropdown dropdown-select">
            <button class="btn btn-relevance" >Relevance</button>
            <div class="dropdown-menu" >
                <a :href="link.url" v-for="(link, index) in data" :key="index" class="dropdown-item">
                    {{link.text}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data']
        
    }
</script>
