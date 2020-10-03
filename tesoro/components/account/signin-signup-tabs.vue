<template>
    <div class="signin-signup-tabs">
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <nuxt-link 
                    class="nav-link" 
                    :class="{ active : active == 'signup' }"
                    to="/account/signup">
                    Sign up
                </nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link 
                    class="nav-link" 
                    :class="{ active : active == 'signin' }"
                    to="/account/signin">
                    Sign In
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            active:{
                type: String,
                required : true
            }
        },

    }
</script>

