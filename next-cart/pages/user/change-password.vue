<template>
    <div class="user-panel user-change-password">

        <div class="user-panel-header">
            <h4 class="user-panel-heading">Reset Password</h4>
        </div>

        <div class="user-panel-content" >
            <form action="" class="user-edit text-gray">
                <div class="form-row form-group ">
                    <label for="" class="col-md-3 ">Email Address :</label>
                    <div class="col-md-6">
                        alihamzabukhari007@gmail.com
                    </div>
                </div>
                
                <div class="form-row form-group ">
                    <label for="" class="col-md-3 col-form-label">New Password
                        <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="New Password">
                    </div>
                </div>

                <div class="form-row form-group ">
                    <label for="" class="col-md-3 col-form-label">Confirm New Password
                        <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Confirm New Password">
                    </div>
                </div>
          
                <div class="form-row form-group">
                    <label for="" class="col-md-3 col-form-label">
                    </label>
                    <div class="col-md-9">
                        <input type="button" value="Save Canges" class="btn btn-primary">
                    </div>
                </div>

            </form>
        </div>    

    </div>
</template>

<script>
    export default {
        layout: 'user'
    }
</script>
