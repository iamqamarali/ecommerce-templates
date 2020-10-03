<template>
    <div class="banners-grid-wrapper">
        <div class="section">
            
            <div class="section-header">
                <h3 class="section-heading title">TOP TRENDING collections</h3>
                <div class="section-heading-underline"></div>
            </div>

            <div class="banners-grid">
                <div class="row no-gutters ">
                    <template
                        v-for="(img, index) in images" 
                        >
                        <div class="col-12 col-md-6" v-if="index % 7 == 0" :key="index">
                            <a :href="img.href" class="banner-link">
                                <div class="background-img banner-background-img" 
                                    :style="'background-image:url('+ img.src +')'">
                                </div>
                            </a>
                        </div>    
                        <div class=" col-6 col-md-3 " v-else :key="index">
                            <a :href="img.href" class="banner-link">
                                <div class="background-img banner-background-img" 
                                    :style="'background-image:url('+ img.src +')'">
                                </div>
                            </a>
                        </div>                
                    </template>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['images']
    }
</script>

