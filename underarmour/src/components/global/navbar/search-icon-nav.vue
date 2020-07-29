<template>
<div class="search-icon-nav" >
    <!-- Search Form -->
    <form action="" class="form-inline search-form" :class="{'show': showSearchForm}">
        <input type="text" class="form-control form-control-sm" placeholder="Search">
        <button type="submit" class="btn btn-sm btn-icon">
            <i class="icon icon-search"></i>
        </button>
    </form>

    <!-- Icons -->
    <ul class="nav icons-nav">
        <li class="nav-item nav-search-icon" @click.prevent="showSearchForm = !showSearchForm ">
            <a href="" class="nav-link" >
                <i class="icon icon-search"></i>
            </a>
        </li>
        <li class="nav-item">
            <a href="" class="nav-link">
                <i class="icon icon-heart"></i>
            </a>
        </li>
        <li class="nav-item">
            <a href="" class="nav-link">
                <i class="icon icon-bag"></i>
            </a>
        </li>
    </ul>

</div>
</template>

<script>
    export default {
        data(){
            return {
                showSearchForm: false,
            }
        }
    }
</script>
