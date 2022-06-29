<template>
 <main>
    <h1>Home page</h1>
    <NuxtLink to="/home">Home page</NuxtLink>
    <NuxtLink to="/test">Test page</NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
    <Home></Home>
  </main>
</template>

<script>
import Home from '../../components/Home.vue'
export default {
    name: "IndexPage",
    components: {
    Home,
    }
}
</script>
