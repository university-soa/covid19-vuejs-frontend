<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <ul>
      <li v-for="anew in news" v-bind:key="anew">
        <div class="news">
        <h4>{{anew.title }}</h4>
        <div>{{ anew.author }}, {{ anew.creationDate }}</div>
        <table>
          <tr>
            keywords: <td v-for="keyword in anew.keywords" v-bind:key="keyword"> #{{keyword}}</td>
          </tr>
        </table>
        <p class="news" v-for="par in anew.paragraphs" v-bind:key="par">
          {{par}}
        </p>
        </div>
        <br>
      </li>
    </ul>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
return {
    news : [],
    covid: {}
  };
},
  created() {
    fetch("http://localhost:8081/news").then(response => response.json()).then(response => {
      this.news = response
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h4 {
  font-family: Georgia,"Times New Roman",Times,serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p.news {
  font-family: Georgia,"Times New Roman",Times,serif;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 10px;
  margin-inline-end: 10px;
  text-align: justify;
}
div.news {
  border-color: darkgreen;
  border-style: solid;
  border-width: medium;
  border-radius: 5px;
}
</style>
