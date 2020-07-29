<template>
    <div class="signin-page">
        <div class="account-container">
            <signin-signup-tabs active="signin"></signin-signup-tabs>

            <div class="signin-page-content text-center">
                
                <div class="signin-form-container">
                    <h3 class="title">Sign In With Email</h3>
                    <form action="" class="signin-form">
                        <div class="form-group">
                            <label for="" class="form-label">Email Address</label>
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-black btn-block">Sign in</button>
                        </div>
                    </form>
                    <a href="" class="hover-underline">Forget Password</a>
                </div>

                <h4 class="title"> OR </h4>

                <div class="social-signin">
                    <h3 class="title">Sign In with</h3>
                    <div class="btn-group">
                        <button class="btn btn-facebook">
                            <i class="fi flaticon-facebook-logo"></i>
                            Facebook
                        </button>
                        <button class="btn btn-google">
                            <i class="fi flaticon-google-plus-logo"></i>
                            Google
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import signinSignupTabs from '@/components/account/signin-signup-tabs'
export default {
    layout: 'account',
    components:{
        signinSignupTabs
    },
    mounted(){
        
    }
}
</script>