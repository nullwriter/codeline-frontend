<template>
    <div id="weather-detail">
        <h3>Weather for {{ this.data.title }}</h3>
        <div class="text-center">
            {{ new Date() | moment("dddd, MMMM Do YYYY") }}
        </div>

        <div class="container d-flex mt-4 justify-content-center">

            <div class="card mr-2" v-for="info in this.data.consolidated_weather">
                <div class="card-body d-flex flex-column">
                    <span>{{ info.applicable_date | moment("dddd") }}</span>
                    <span>{{ info.applicable_date | moment("DD/MM") }}</span>
                    <span><img id="weather-icon" :src="iconUrl+info.weather_state_abbr+'.svg'" /></span>
                    <span>Temperature: {{ info.the_temp | oneDecimal }}</span>
                    <span>Max Temp.: {{ info.max_temp | oneDecimal }}</span>
                    <span>Min Temp.: {{ info.min_temp | oneDecimal }}</span>
                    <span>Wind Speed: {{ info.wind_speed | oneDecimal }}</span>
                    <span>Wind Dir.: {{ info.wind_direction_compass }}</span>
                    <span>Humidity: {{ info.humidity+'%' }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather-detail',
        props: ['data'],
        data () {
            return {
                iconUrl: 'https://www.metaweather.com/static/img/weather/'
            }
        }
    }
</script>

<style>
    #weather-detail {
        margin-top: 60px;
    }

    #weather-icon {
        width: 20%;
    }
</style>