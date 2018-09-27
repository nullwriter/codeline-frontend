<template>
    <div id="home">
        <input type="text" size="30" placeholder="Search a city" v-model="cityInput" />
        <input type="button" value="Search" @click="GoToSearch()">

        <div id="city-list" class="d-flex mt-4 flex-wrap justify-content-center">
            <div class="card mb-4 ml-2 mr-2" style="width: 18rem;" v-for="city in cities">
                <div class="card-body">
                    <h5 class="card-title">{{ city.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-text"></p>
                    <a href="#" class="card-link">Card link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                cityInput :'',
                cities: [
                    { name: 'Istanbul' },
                    { name: 'Berlin' },
                    { name: 'London' },
                    { name: 'Helsinki' },
                    { name: 'Dublin' },
                    { name: 'Vancouver' }
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