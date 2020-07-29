<template>
    <div class="instagram-feed  ">

        <div class="section pb-2">
            <h3 class="section-heading secondry-font">SHOP OUT INSTAGRAM</h3>

            <div class="section-content">
                <div class="grid" ref="grid">
                    <div class="grid-col-sizer"></div>
                </div>

                <div class="text-center py-4">
                    <button class="btn btn-outline-dark" click="loadMoreFeeds">See More From Instagram</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Masonry from 'masonry-layout'
import imagesloaded from 'imagesloaded'

export default {
    data(){
        return {
            // need at least 5 images at a time and with a gap of 5 
            // like 5 or 10 or 15 etc
            instagram: {
                images: []
            },

            masonryGrid : null
        }
    },
    mounted(){
        ((codeCanRun) => {

            if(!codeCanRun)
                return false
        
            this.masonryGrid = new Masonry('.grid', {
                itemSelector: '.grid-item',
                columnWidth: '.grid-col-sizer',
                stagger: 50, 
                // nicer reveal transition
                hiddenStyle: { transform: 'scale(.2)', opacity: 0 },
                visibleStyle: { transform: 'scale(1)', opacity: 1 }
            })
                        // do some api request
            let images = [
                        {
                            img : '/images/insta/instagram-1.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-2.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-4.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-5.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-6.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-7.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },
                        {
                            img : '/images/insta/instagram-8.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },                   
                        {
                            img : '/images/insta/instagram-9.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },                   
                        {
                            img : '/images/insta/instagram-10.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },                   
                                            {
                            img : '/images/insta/instagram-11.jpg',
                            username: '@UNDERARMOUR',
                            caption : 'Made to stand out. The UA “Be Seen” collection is inspired by what our athletes wear on the way to the game. Shop exclusively at our link in bio. #WEWILL',
                        },

            ]        

            // create a backup
            Array.prototype.push.apply(this.instagram.images, images)
            
            // only supply new images to this method
            this.loadImages(images);        


        })((typeof window == 'object' && typeof document == 'object')? true : false)

    },
    methods:{       
        loadMoreFeeds(){
            // do some api request here to load images
            // let images = [ some images]
            // create a backup
            // Array.prototype.push.apply(this.instagram.images, images)
            // load only new images
            //this.loadImages(images);
        },
         loadImages(imagesData){
            let htmlImages = imagesData.map( (img, i) => {
                let colClass = (i % 7 == 0) ? 'grid-item-width-2' :''
                return `<div class="grid-item `+colClass+`">
                            <div class="grid-container">
                                <img src="`+ img.img +`" alt="" class="grid-photo">
                                <div class="overlay ">
                                    <p>`+ img.caption.substring(0, 120) +`</p>                            
                                </div>
                                <span class="username">`+img.username+`</span>
                            </div>
                        </div>`;
            })
            let proxyElm = document.createElement('div');
            proxyElm.innerHTML = htmlImages;
            let images = proxyElm.querySelectorAll('.grid-item');

            imagesloaded(images ,() => {
                images.forEach( el  => this.$refs.grid.append(el))
                this.masonryGrid.appended(images);
                this.masonryGrid.layout();
            })
        },
    } 
}
</script>



<style>
.instagram-feed{
}
.grid-col-sizer,
.grid-item{
    width: 25%;
}
.grid-item-width-2{
    width: 50%;    
}
.grid-container{
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    overflow: hidden;
    max-height: 340px;
}
.grid-item-width-2 .grid-container{
    max-height: 680px;
}

.grid-photo{
    display: block;
    width: 100%;
}
.grid-container .username{
    position: absolute;
    bottom: 10px;
    left: -100%;
    max-width: 100%;
    background-color: black;
    color: #f2f2f2;
    letter-spacing: .5px;
    font-size: 12px;
    padding: 7px 20px;
    transition: all .5s ease;
}
.grid-container:hover .username{
    left: 0%;
}
.grid-container .overlay{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    color: #ccc;
    font-size: 14px;
    transform: scale(0);
    transition: all .5s ease;
}
.grid-container:hover .overlay{
    transform: scale(1);
}
@media (max-width: 1300px){
    .grid-container{
        max-height: 270px;
    }
    .grid-item-width-2 .grid-container{
        max-height: 540px;
    }
}

@media (max-width: 1150px){
    .grid-container{
        max-height: 220px;
    }
    .grid-item-width-2 .grid-container{
        max-height: 440px;
    }    
}


@media (max-width: 991.98px){
    .grid-col-sizer,
    .grid-item{
        width: 33.33%;
    }
    .grid-item-width-2{
        width: 66.33%;
    }
}
@media (max-width: 767.98px){
    .grid-col-sizer,
    .grid-item{
        width: 50%;
    }
    .grid-container{
        max-height: 260px;
    }    

    .grid-item-width-2{
        width: 100%;
    }
    .grid-item-width-2 .grid-container{
        max-height: 520px;
    }

}
@media (max-width: 575.98px){
    .grid-container{
        max-height: 160px;
    }
    .grid-item-width-2 .grid-container{
        max-height: 320px;
    }
    .grid-container .overlay{
        display: none;
    }
}

</style>
