<template>
    <div class="footer-middle">
        <div class="container-fluid">
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
                        headline:{ text: 'Overview' , url: '/asd'},
                        links:[
                            {text:'Collections' , url: '/help'},
                            {text:'About Us' , url: '/order tracket'},
                            {text:'Contact Us' , url: '/returns and funds'},
                        ]
                    },
                    {
                        headline:{ text: 'OUR POLICIES' , url: '/asd'},
                        links:[
                            {text:'Return, Exchange & Shipping Policy' , url: '/help'},
                            {text:'FAQs' , url: '/order tracket'},
                            {text:"Terms & Conditions and Privacy Policy" , url: '/returns and funds'}
                        ]
                    },
                    {
                        headline:{ text: 'CUSTOMER DELIGHT' , url: '/asd'},
                        links:[
                            {text:'Track Your Order' , url: '/help'},
                            {text:'Bespoke Design' , url: '/order tracket'},
                            {text:'Price Match Guarantee' , url: '/returns and funds'},
                            {text:'Jewellery Makeover' , url: '/sizing'},
                            {text:'SBI Offers' , url: '/sizing'},
                        ]
                    },
                 /*   {
                        headline:{ text: 'CUSTOMER DELIGHT' , url: '/asd'},
                        links:[
                            {text:'Track Your Order' , url: '/help'},
                            {text:'Bespoke Design' , url: '/order tracket'},
                            {text:'Price Match Guarantee' , url: '/returns and funds'},
                            {text:'Jewellery Makeover' , url: '/sizing'},
                            {text:'SBI Offers' , url: '/sizing'},
                        ]
                    },
                    {
                        headline:{ text: 'CUSTOMER DELIGHT' , url: '/asd'},
                        links:[
                            {text:'Track Your Order' , url: '/help'},
                            {text:'Bespoke Design' , url: '/order tracket'},
                            {text:'Price Match Guarantee' , url: '/returns and funds'},
                            {text:'Jewellery Makeover' , url: '/sizing'},
                            {text:'SBI Offers' , url: '/sizing'},
                        ]
                    },*/
                ] 
            }        
        }
    }
</script>

