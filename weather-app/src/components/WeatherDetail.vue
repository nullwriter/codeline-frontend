<template>
    <div id="weather-detail">
        <h3>Weather Detail</h3>
        <div v-if="this.loading"><img style="width: 5rem" src="../assets/loading-weather.svg" /></div>
        <div v-else><h4>Done :)</h4></div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'weather-detail',
        components: {
        },
        data () {
            return {
            }
        },
        mounted () {
            let url = window.location.origin + window.location.pathname + 'src/weather.php?command=location&woeid='+ this.woeid;

            axios
                .get(url)
                .then(response => {
                    this.info = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.info = 'No information was sent back.'
                })
                .finally(() => this.loading = false)
        },
        methods:{
        }
    }
</script>

<style>
    #weather-detail {
        margin-top: 60px;
    }
</style>