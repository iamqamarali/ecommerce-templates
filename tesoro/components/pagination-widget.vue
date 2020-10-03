<template>
    <ul class="pagination">

        <li class="page-item"
            :class="{ disabled : !prev }">
            <a :href="prev" class="page-link">
                <i class="fi flaticon-left-chevron fs-1x mr-1"></i> 
                Prev
            </a>
        </li>

        <li class="page-item" 
            v-for="(link, index) in links" :key="index"
            :class="{ active: link.current }"
            >
            <a :href="link.href" class="page-link">
                {{ index }}
            </a>
        </li>


        <li class="page-item"
            :class="{ disabled : !next }">
            <a :href="next" class="page-link">
                Next
                <i class="fi flaticon-right-chevron fs-1x ml-1 "></i> 
            </a>
        </li>

    </ul>
</template>

<script>
export default {
    props:{
        links:{
            type: Array,
            required: true,
        },
        next: {
            default: null
        },
        prev:{
            default: null
        }
    }
}
</script>

