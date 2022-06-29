<template>
 <main>
    <h1>Test page</h1>
    <NuxtLink to="/home">Home page</NuxtLink>
    <NuxtLink to="/test">Test page</NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
    <Test></Test>
  </main>
</template>

<script>
import Test from '../../components/Test.vue'
export default {
    name: "IndexPage",
    components: {
    Test,
    }
}
</script>
