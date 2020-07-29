<template>
    <div class="tag">
        {{ text }}
        <a href="" class="tag-close" @click.prevent="$emit('remove', data)">&times;</a>
    </div>
</template>

<script>
    export default {
        props: ['text', 'data']

    }
</script>

