import axios from 'axios'

export const state = () => ({
  homelistnew : []
})

export const getters = {
  getHome(state) {
    return state.homelistnew
  }
}

export const mutations = {
  SET_DATA(data) {
    state.homelistnew = data
  }
}

export const actions = {
  async fetchHomeListNew(context) {
    try {
      // console.log(this.$config.myPrivateToken)
      // console.log(this.$config.myPublicVariable)
      // console.log(process.env.HOMELISTNEW)


      const headers = { "APPTOKEN" : "klaklikapptoken", 'Content-Type': 'application/json',}
      const data = await axios.post(this.$axios.defaults.baseURL+"/home-list-new", {},{headers : headers} )
      .then(resp =>   context.commit('SET_DATA', resp.data.DATA))

      }
      catch (error) {
        alert(error)
        console.log(error)
    }
  },
}
