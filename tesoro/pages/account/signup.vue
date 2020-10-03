<template>
    <div class="signup-page">
        <div class="account-container">
            <signin-signup-tabs active="signup"></signin-signup-tabs>

            <div class="signup-page-content text-center">
                
                <!-- social -->
                <div class="social-signup">
                    <h3 class="title">Sign Up with</h3>
                        <button class="btn btn-facebook">
                            <i class="fi flaticon-facebook-logo"></i>
                            Facebook
                        </button>
                        <button class="btn btn-google">
                            <i class="fi flaticon-google-plus-logo"></i>
                            Google
                        </button>
                </div>
            
                <h4 class="title"> OR </h4>
            
                <div class="signup-form-container ">
                    <h3 class="title">Sign Up With Email</h3>
                    <form action="" class="signup-form">
                        <div class="form-group">
                            <label for="">Email Address</label>
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="">First Name</label>
                            <input type="text" class="form-control" placeholder="First Name">
                        </div>
                        <div class="form-group">
                            <label for="">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last Name">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="">Confirm Password</label>
                            <input type="password" class="form-control" placeholder="Password, Again">
                        </div>                       
                        <!-- gender -->
                        <div class="form-check form-check-inline">
                            <label  class="form-check-label">
                                <input type="radio" name="gender">
                                Girl
                            </label>
                        </div>
                        <div class="form-check form-check-inline mb-4">
                             <label  class="form-check-label">
                                <input type="radio" name="gender">                                
                                Guy
                            </label>
                        </div>

                        <div class="form-group">
                            <button type="button" class="btn btn-black btn-block">Sign Up</button>
                        </div>
                    </form>
                   <p>By creating your account, you agree to our <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a></p>
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