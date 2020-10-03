<template>
    <div class="user-panel user-subscriptions">

        <div class="user-panel-header">
            <h3 class="user-panel-heading font-weight-normal">Manage Subscriptions</h3>
        </div>

        <div class="user-panel-content" >
            <div class="user-subscriptions-content">
                <h4 class="user-subscriptions-heading">Email Notifications</h4>
                <form action="" class=" subscriptions-form mt-3">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" id="promotional" class="custom-control-input">
                        <label for="promotional" class="custom-control-label">Sign up for Promotional newsletter</label>
                    </div>

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" id="merchant" class="custom-control-input">
                        <label for="merchant" class="custom-control-label">Sign up for Merchant Followers newsletter</label>
                    </div>

                    <p class="user-subscriptions-message">You must follow at least one merchant also to get the Merchant Followers newsletter</p>

                    <button type="button" class="btn btn-primary">Save</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        layout: 'user'
    }
</script>

