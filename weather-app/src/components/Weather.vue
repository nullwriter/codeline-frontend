<template>
    <div class="card mb-4 ml-2 mr-2 weather-card" style="width: 18rem;">
        <div class="card-body" @click="GoToWeather()">
            <h5 class="card-title">{{ this.city.title }}</h5>
            <div class="card-text" v-if="this.loading">
                <img style="width: 5rem" src="../assets/loading-weather.svg" />
            </div>
            <div class="card-text" v-else-if="this.error">
                {{ this.info }}
            </div>
            <div class="card-text d-flex flex-column" v-else>
                <span><img id="weather-icon" :src="icon" /></span>
                <span>Temperature: {{ this.today.the_temp | oneDecimal }}</span>
                <span>Max Temp.: {{ this.today.max_temp | oneDecimal }}</span>
                <span>Min Temp.: {{ this.today.min_temp | oneDecimal }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'weather',
        props: ['city'],
        data () {
            return {
                info: null,
                today: null,
                loading: true,
                error: false,
                icon: null
            }
        },
        mounted () {
            let url = window.location.origin + window.location.pathname + 'src/weather.php?command=location&woeid='+ this.city.woeid;

            axios
                .get(url)
                .then(response => {
                    this.info = response.data
                    this.today = response.data.consolidated_weather[0]
                    this.icon = 'https://www.metaweather.com/static/img/weather/'+this.today.weather_state_abbr+'.svg'
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                    this.info = 'Couldn\'t get weather information.'
                })
                .finally(() => this.loading = false)
        },
        methods:{
            GoToWeather : function(){
                if ( !this.error ) {
                    this.$router.push({ name: 'WeatherDetail', params: { woeid: this.city.woeid, data: this.info }})
                }
            }
        }
    }
</script>

<style>
    #weather-icon {
        width: 20%;
    }

    .weather-card {
        cursor: pointer;
    }
</style>
