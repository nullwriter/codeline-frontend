<template>
    <div class="card mb-4 ml-2 mr-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ this.city.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <div class="card-text">
                <div v-if="this.loading">
                    <img style="width: 5rem" src="../assets/loading-weather.svg" />
                </div>
                <div v-else>
                    {{ this.info }}
                </div>
            </div>
            <a href="#" class="card-link">Card link</a>
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
                loading: true
            }
        },
        mounted () {
            let url = window.location.origin + window.location.pathname + 'src/weather.php?command=location&woeid='+ this.city.woeid;

            axios
                .get(url)
                .then(response => {
                    this.info = response
                })
                .catch(error => {
                    console.log(error)
                    this.info = 'No information was sent back.'
                })
                .finally(() => this.loading = false)
        }
    }

    console.log(window.location);
</script>

<style>
    #weather {
        margin-top: 60px;
    }
</style>