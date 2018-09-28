<template>
    <div id="search">
        <h3>Search: {{ $route.params.keyword }}</h3>
        <div class="text-center mt-4" v-if="this.loading">
            <img style="width: 5rem" src="../assets/loading-weather.svg" />
        </div>
        <div class="text-center mt-4" v-else-if="this.noResults || this.error">
            No results were found. Try changing the keyword!
        </div>
        <div class="d-flex mt-4 flex-wrap justify-content-center" v-else>
            <weather v-for="city in cities" :city="city"></weather>
        </div>
    </div>
</template>

<script>
    import weather from '../components/Weather'
    import axios from 'axios'

    export default {
        name: 'search',
        components: {
            weather
        },
        data () {
            return {
                cities: null,
                noResults: false,
                error: false,
                loading: true
            }
        },
        mounted () {
            let url = window.location.origin + window.location.pathname + 'src/weather.php?command=search&keyword='+ this.$route.params.keyword;

            axios
                .get(url)
                .then(response => {
                    if ( response.data.length === 0 ) {
                        this.noResults = true;
                    } else {
                        this.cities = response.data;
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>

<style>
    #search {
        margin-top: 60px;
    }
</style>