<template>
    <div class="size-chart">
        <h5 class="title-small">SIze Chart</h5>
        <div class="size-chart-table-container">
            <table class="table">
                <thead>
                    <th>SIZE</th>
                    <th>CHEST(in)</th>
                    <th>WAIST(in)</th>
                </thead>
                <tbody>
                    <tr v-for="(size, index) in sizes" :key="index">
                        <td>{{ size.size }}</td>
                        <td>{{ size.chest }}</td>
                        <td>{{ size.waist }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    export default {
       props: ['sizes'] 
    }
</script>

<style >

</style>