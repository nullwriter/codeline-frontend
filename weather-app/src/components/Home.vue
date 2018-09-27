<template>
    <div id="home">
        <input type="text" size="30" placeholder="Search a city" v-model="cityInput" />
        <input type="button" value="Search" @click="GoToSearch()">

        <div class="d-flex mt-4 flex-wrap justify-content-center">
            <weather v-for="city in cities" :city="city"></weather>
        </div>
    </div>
</template>

<script>
    import weather from '../components/Weather'

    export default {
        name: 'home',
        components: {
            weather
        },
        data () {
            return {
                cityInput :'',
                cities: [
                    { name: 'Istanbul', woeid: '2344116' },
                    { name: 'Berlin', woeid: '638242' },
                    { name: 'London', woeid: '44418' },
                    { name: 'Helsinki', woeid: '565346' },
                    { name: 'Dublin', woeid: '560743' },
                    { name: 'Vancouver', woeid: '9807' }
                ]
            }
        },
        methods:{
            GoToSearch : function(){
                this.$router.push({ name: 'SearchCity', params: { keyword: this.cityInput }})
            }
        }
    }
</script>

<style>
    #home {
        margin-top: 60px;
    }
</style>