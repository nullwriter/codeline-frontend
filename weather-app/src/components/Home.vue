<template>
    <div id="home">
        <div class="input-group" id="search-inputs">
            <input type="text" class="form-control" size="30" placeholder="Search a city" v-model="cityInput" />
            <input type="button" class="btn btn-primary" value="Search" @click="GoToSearch()">
        </div>
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
                    { title: 'Istanbul', woeid: '2344116' },
                    { title: 'Berlin', woeid: '638242' },
                    { title: 'London', woeid: '44418' },
                    { title: 'Helsinki', woeid: '565346' },
                    { title: 'Dublin', woeid: '560743' },
                    { title: 'Vancouver', woeid: '9807' }
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

    #search-inputs {
        width: 30%;
        margin: 0 auto;
    }

    #search-inputs > input[type='button'] {
        border-radius: 0;
    }
</style>