<template>
    <div class="narrow-banner">
        <div class="background-img"
            :style="'background-image:url('+ img +')'"
            >
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            img:{
                type : String,
                required: true
            }
        }
    }
</script>
