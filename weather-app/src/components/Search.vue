<template>
    <div id="search">
        <h3>Search: {{ $route.params.keyword }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'search'
    }
</script>

<style>
    #search {
        margin-top: 60px;
    }
</style>