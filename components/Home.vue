<template>
  <div>
    <p>{{homelistnew}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
      return {
        mountains: []
      }
  },
  mounted(){
      // this.$store.dispatch('home/fetchHomeListNew')

      // const headers = { "APPTOKEN" : "klaklikapptoken", 'Content-Type': 'application/json',}
      // const data =  axios.post(this.$axios.defaults.baseURL+"/home-list-new", {},{headers : headers} ).then(resp =>   console.log(resp.data.DATA))

      // const requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'APPTOKEN': 'klaklikapptoken'
      //   },
      //   body: JSON.stringify({ title: 'Vue POST Request Example' })
      // };
      // fetch(this.$axios.defaults.baseURL+"/home-list-new", requestOptions)
      //   .then(response => response.json())
      //   .then(data => console.log(data))



  },

  async fetch() {
      // this.mountains = await fetch(
      //   'https://api.nuxtjs.dev/mountains'
      // ).then(res => res.json())

      //   const headers = { "APPTOKEN" : "klaklikapptoken", 'Content-Type': 'application/json',}
      // this.mountains = await fetch(
      //   "https://dvl.klaklik.com/gateway2/featurenovel", {headers:headers}
      // ).then(res => res.json())
      this.$store.dispatch('home/fetchHomeListNew')

    },

   computed: {
      homelistnew(){
        return this.$store.getters.getHome
      }
    }
}
</script>
