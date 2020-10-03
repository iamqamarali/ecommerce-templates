<template>
    <div class="forget-password-page text-gray-darker  pt-5">
        <div class="account-container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
                    <h3 class="font-weight-600 mb-4">Reset Password</h3>
                    <p>To request a new password, please enter your most current registered email on PCJeweller</p>
        
                    <form action="">
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-black btn-block">Continue</button>
                        </div>
                    </form>
                    <nuxt-link to="/account/signin">
                        <i class="fi flaticon-back-arrow mr-1"></i>
                        <span>Back to login</span>
                    </nuxt-link>


                </div>
            </div><!-- Row -->
        </div>
    </div>
</template>

<script>
export default {
    layout: 'account'
}
</script>

