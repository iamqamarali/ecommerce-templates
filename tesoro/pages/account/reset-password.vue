<template>
    <div class="forget-password-page text-gray-darker  pt-5">
        <div class="account-container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
                    <h3 class="font-weight-600 mb-4">Create New Password</h3>
                    <p>Enter the credentials of for your new password</p>
        
                    <form action="">
                        <div class="form-group">
                            <label for="">New Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="">Password Confirmation</label>
                            <input type="password" class="form-control" placeholder="Password Confirmation">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-black btn-block">Reset</button>
                        </div>
                    </form>
                    


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

