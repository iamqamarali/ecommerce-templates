<template>
    <div class="header-message-bar text-md-center">
        <a :href="url" class="header-message hover-underline  fs-sm">
            <i class="fi flaticon-shipped fi-10x mr-2"></i>
           {{ message }} 
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message: 'FREE SHIPPING AND FREE RETURNS',
                url: '/asdasd'
            }
        }
    }
</script>
