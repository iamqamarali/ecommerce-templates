<template>
    <div class="user-panel user-edit">

        <div class="user-panel-header">
            <h4 class="user-panel-heading">Personal Information</h4>
        </div> 

        <div class="user-panel-content" >
            <form action="" class="user-edit text-gray">
                <div class="form-row form-group ">
                    <label for="" class="col-md-3 ">Email ID :</label>
                    <div class="col-md-6">
                        alihamzabukhari007@gmail.com
                    </div>
                </div>
                
                <div class="form-row form-group ">
                    <label for="" class="col-md-3 col-form-label">Name:</label>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Ali Hamza">
                    </div>
                </div>

                <div class="form-row form-group ">
                    <label for="" class="col-md-3 col-form-label">Gender 
                        <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-6">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" name="gender" id="Male" class="custom-control-input ">
                            <label for="Male" class="custom-control-label">Male</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" name="gender" id="female" class="custom-control-input">
                            <label for="female" class="custom-control-label">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-row form-group">
                    <label for="" class="col-form-label col-md-3">
                        Date of Birth 
                        <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-6">
                        <div class="form-inline">
                            <!-- Date -->
                            <select name="" id="" class="form-control mb-2 mb-sm-0 mr-sm-1">
                                <option value>Date</option>
                                <option :value="index" 
                                    v-for="index in 31" :key="index">
                                    {{ index }}
                                </option>
                            </select>

                            <!-- Month -->
                            <select name="" id="" class="form-control mb-2 mb-sm-0 mr-sm-1">
                                <option value>Month</option>
                                <option :value="index" 
                                    v-for="index in 12" :key="index">
                                    {{ index }}
                                </option>
                            </select>

                            <!-- Year -->
                            <select name="" id="" class="form-control mb-2 mb-sm-0 ">
                                <option value>Year</option>
                                <option :value="index" 
                                    v-for="index in 80" :key="index">
                                    {{ index + 1925 }}
                                </option>
                            </select>
                            
                        </div>
                    </div>
                </div>
                
                <div class="form-row form-group">
                    <label for="" class="col-md-3 col-form-label">
                        Profile Language
                        <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-6">
                        <select name="" id="" class="form-control">
                            <option value="en" selected >English (US)</option>
                        </select>
                    </div>
                </div>

                <div class="form-row form-group">
                    <label for="" class="col-md-3 col-form-label">
                    </label>
                    <div class="col-md-6">
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
