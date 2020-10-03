<template>
    <div class="product-images-wrapper">
        <div class="product-images product-images-right">

            <div class="product-current-image-container">
                <img :src="currentImage" @click.prevent="openImage" ref="currentImage" class="product-current-image" alt="">
            </div>

            <div class="product-images-items-container" ref="productImagesSlider">
                <div class="product-images-item"
                    v-for="(image, index) in images" :key="index"
                    :class="{'current': currentImage == image}"
                    @mouseover="showAsCurrentImage(image)"
                    @click="showAsCurrentImage(image)"
                    >
                    <img :src="image" class="product-image" alt="">
                </div>
            </div>
        </div>




            <div class="pswp"  ref="pswpElement" tabindex="-1" role="dialog" aria-hidden="true">

                <!-- Background of PhotoSwipe. 
                    It's a separate element as animating opacity is faster than rgba(). -->
                <div class="pswp__bg"></div>

                <!-- Slides wrapper with overflow:hidden. -->
                <div class="pswp__scroll-wrap">

                    <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. -->
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>

                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                    <div class="pswp__ui pswp__ui--hidden">

                        <div class="pswp__top-bar">

                            <!--  Controls are self-explanatory. Order can be changed. -->

                            <div class="pswp__counter"></div>

                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                            <button class="pswp__button pswp__button--share" title="Share"></button>

                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                            <!-- element will get class pswp__preloader--active when preloader is running -->
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div> 
                        </div>

                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>

                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>

                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>

                    </div>

                </div>

            </div>


    </div>
</template>

<script>

export default {
    props: ['images'],
    head: {
        link:[
            { rel:'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/default-skin/default-skin.min.css'},
            { rel:'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.css'}
        ],
        script:[
            { src :'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe-ui-default.min.js'},
            { src : 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js'}
        ]
    },
    data(){
        return {
            currentImage: this.images[0],
            displayImageModal: true,
        }
    },
    watch:{
        images(newVal){
            this.currentImage = newVal[0]      
        }
    },
    mounted(){
    },
    methods:{
        showAsCurrentImage(image){
            this.currentImage = image;
        },

        openImage(){
            var items = [
                {
                    src: this.$refs.currentImage.src,
                    w: this.$refs.currentImage.width,
                    h: this.$refs.currentImage.height
                },
            ];
            
            let options = {
            }
            let gallery = new PhotoSwipe(this.$refs.pswpElement, PhotoSwipeUI_Default, items, options)

            gallery.init()
        }
    }
}
</script>

