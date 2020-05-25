<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/banner.png">
    <div class="header">
      <h1>Covid 19 News</h1>
      <p>Sofia University SOA project</p>
    </div>
    <HelloWorld/>
    <CovidNews/>
    <ExternalNews/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CovidNews from './components/CovidNews.vue'
import ExternalNews from './components/ExternalNews.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CovidNews,
    ExternalNews
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
