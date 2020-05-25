<template>
    <div class="hello">
        <br>
        <h2>External News</h2>
        <ul>
            <div v-if="result">The news cannot be loaded. Problem is: {{result}}</div>
            <li v-for="anew in news" v-bind:key="anew">
                <div class="news">
                    <h4>{{anew.title }}</h4>
                    <div>{{ anew.provider.name }}, {{ anew.publishedDateTime }}</div>
                    <table>
                        <tr>
                            keywords: <td v-for="topic in anew.topics" v-bind:key="topic"> #{{topic}}</td>
                        </tr>
                    </table>
                    <p>{{anew.excerpt}}</p>
                    See more here: <a :href="anew.webUrl">{{anew.webUrl}}</a>
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
                news : {},
                result: undefined
            };
        },
        created() {
            this.$http.get("https://api.smartable.ai/coronavirus/news/US",  {
                headers: {
                    "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d"
                }
            }).then(response => this.news = response.data.news).catch(e => this.result = e);
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
