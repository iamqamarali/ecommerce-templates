<template>
    <div class="footer-middle">
        <div class="container">
            <div class="row ">
                <div class="col-md"
                    v-for="(nav, index) in footerNavs" :key="index"
                    >
                    <div class="footer-middle-nav-container">
                        <a :href="nav.headline.url" class="footer-middle-nav-headline">{{ nav.headline.text }}</a>
                        <ul class="vertical-nav footer-middle-nav">
                            <li
                                v-for="(link, index) in nav.links" :key="index"
                                >
                                <a :href="link.url">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                footerNavs:[
                    {
                        headline:{ text: 'customer support' , url: '/asd'},
                        links:[
                            {text:'Help' , url: '/help'},
                            {text:'Order tracket' , url: '/order tracket'},
                            {text:'Returns and funds' , url: '/returns and funds'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                        ]
                    },
                    {
                        headline:{ text: 'customer support' , url: '/asd'},
                        links:[
                            {text:'Help' , url: '/help'},
                            {text:'Order tracket' , url: '/order tracket'},
                            {text:'Returns and funds' , url: '/returns and funds'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                        ]
                    },
                    {
                        headline:{ text: 'customer support' , url: '/asd'},
                        links:[
                            {text:'Help' , url: '/help'},
                            {text:'Order tracket' , url: '/order tracket'},
                            {text:'Returns and funds' , url: '/returns and funds'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                        ]
                    },
                    {
                        headline:{ text: 'customer support' , url: '/asd'},
                        links:[
                            {text:'Help' , url: '/help'},
                            {text:'Order tracket' , url: '/order tracket'},
                            {text:'Returns and funds' , url: '/returns and funds'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                        ]
                    },
                    {
                        headline:{ text: 'customer support' , url: '/asd'},
                        links:[
                            {text:'Help' , url: '/help'},
                            {text:'Order tracket' , url: '/order tracket'},
                            {text:'Returns and funds' , url: '/returns and funds'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                            {text:'Sizing' , url: '/sizing'},
                        ]
                    },
                ] 
            }        
        }
    }
</script>

