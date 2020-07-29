<template>
    <div class="summary-line">
        <div class="checkout-container">
            <div class="row">
                <div class="col-4">
                    <h5 class="title">My Shopping Bag</h5>
                </div>
                <div class="col-4">
                    <div class="progress-indicator-line">
                        <ul class="nav progress-indicator-nav">
                            <li class="nav-item">
                                <span class="nav-link" :class="{active: currentStage == 1 }">Bag</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" :class="{active: currentStage == 2 }">Address</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link" :class="{active: currentStage == 3 }">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
                    <div class="bag-summary text-right">
                        <div > Bag Value: 2 Items</div>
                        <span ><strong class="fs-4x">RS 1276</strong></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currentStage:{
                type: Number,
                required: true
            }
        }
    }
</script>

