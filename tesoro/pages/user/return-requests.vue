<template>
    <div class="user-panel user-return-requests">

        <div class="user-panel-header">
            <h4 class="user-panel-heading">Return Requests</h4>
        </div>

        <div class="user-panel-content"  v-if="false">
        </div>    

        <div class="user-panel-empty" v-else>
            <div class="alert alert-warning" role="alert">
                No Records Found
            </div>
        </div>

        <div class="user-panel-footer" v-if="false">
            <pagination-widget
                :links="pagination.links" 
                :prev="pagination.prev"
                :next="pagination.next"
                >
            </pagination-widget>  
        </div>    

    </div>
</template>

<script>
import paginationWidget from '@/components/pagination-widget'

export default {
    layout: 'user',
    components:{
        paginationWidget
    },
    data(){
        return {
            pagination:{
                links:[
                ],
                next: null,
                prev: null
            }

        }
    }
}
</script>
