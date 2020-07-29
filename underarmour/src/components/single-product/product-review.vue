<template>
    <div class="product-review">
        <div class="row">
            <div class="col-md-4 column">
                <div class="product-review-info">
                    <div class="product-review-posted-by">
                        <span>Posted By </span> <a href="" class="secondry-color">{{ review.user.name }}</a>
                    </div>
                    <div class="product-review-posted-at">
                        <span>{{ review.posted_at }}</span>
                    </div>
                    <div class="product-review-user-gender">
                        <strong>Gender: </strong> <span>{{ review.user.gender }}</span>
                    </div>
                    <div class="product-review-athlete-type">
                        <strong>Athlete Type: </strong> <span>{{ review.user.athlete_type }}</span>
                    </div>
                    <div class="product-review-sport-interest">
                        <strong>Sport Interest: </strong> <span>{{ review.user.sport_interest }}</span>
                    </div>
                    <div class="product-review-height">
                        <strong>Height: </strong> <span>{{ review.user.height }}</span>
                    </div>

                    <div class="product-review-size-purchased">
                        <strong>Size Purchased: </strong> <span>{{ review.size_purchased }}</span>
                    </div>

                </div>

            </div>
            <div class="col-md-4 column">
                <div class="product-review-feedback">
                    <rating :rating="review.rating" class="product-review-rating" ></rating>
                    <span class="product-review-title ">{{ review.title }}</span>

                    <div class="product-review-feedback-content">
                        {{ review.feedback }}
                    </div>
                    <div class="product-review-feedback-share">
                        <span>Share this review</span>
                        <a href="#" class="no-underline flaticon flaticon-facebook-letter-logo"></a>
                        <a href="#" class="no-underline flaticon flaticon-twitter"></a>
                    </div>
                </div>
            </div>

            <div class="col-md-4  column">
                <div class="product-review-performance">
                    <div class="product-review-performance-performance">
                        <div class="product-review-performance-heading">Performance</div>
                        <rating-boxes :rating="review.performance" ></rating-boxes>
                    </div> 
                    <div class="product-review-comfort">
                        <div class="product-review-performance-heading">Comfort</div>
                        <rating-boxes :rating="review.comfort" ></rating-boxes>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rating from '../global/rating'
import ratingBoxes  from '../global/rating-boxes'

    export default {
        props: ['review'],
        components:{
            rating,
            ratingBoxes
        }
    }
</script>

