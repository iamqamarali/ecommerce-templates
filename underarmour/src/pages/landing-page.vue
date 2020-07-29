<template>
    <div class="landing-page">

        <top-banner></top-banner>
        <new-arrivals :arrivals="arrivals" ></new-arrivals>
        <collections-two-column :collections="twoColumnData"/>
        <collections-three-column :collections="threeColumnsData"/>
        <instagram-feed ></instagram-feed>

    </div>
</template>

<script>
import topBanner from '../components/landing-page/top-banner'
import newArrivals from '../components/global/new-arrivals'
import collectionsTwoColumn from '../components/global/collections-two-column'
import collectionsThreeColumn from '../components/landing-page/collections-three-column'
import instagramFeed from '../components/landing-page/instagram-feed'

export default {
    components:{
        topBanner : topBanner,
        newArrivals,
        collectionsTwoColumn ,
        collectionsThreeColumn,
        instagramFeed
    },
    data(){
        return {
            twoColumnData:[
                {
                    title :'CURRY 5',
                    description : 'Wired different. Ready to take over.',
                    img : '/images/collection-box.jpeg',
                    link : '/CURRY+5'
                },
                {
                    title :'CURRY 5',
                    description : 'Wired different. Ready to take over.',
                    img : '/images/collection-box.jpeg',
                    link : '/CURRY+5'
                },
            ],
            threeColumnsData:[
                {
                    title :'This is some random title',
                    img : '/images/collection-box.jpeg',
                    link : '/CURRY+5'
                },
                {
                    title :'This is some random title',
                    img : '/images/collection-box.jpeg',
                    link : '/CURRY+5'
                },
                {
                    title :'This is some random title',
                    img : '/images/collection-box.jpeg',
                    link : '/CURRY+5'
                },
            ],
            arrivals:[
                {
                    link :'/men',
                    text : 'MEN'
                },
                {
                    link :'/men',
                    text : 'MEN'
                },
                {
                    link :'/men',
                    text : 'MEN'
                },
                {
                    link :'/men',
                    text : 'MEN'
                },
            ]
        }
    }
}
</script>
