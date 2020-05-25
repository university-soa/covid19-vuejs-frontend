<template>
    <div class="hello">
        <br>
        <h2>Covid19 News</h2>
        <ul>
            {{ responce }}
            <li v-for="anew in news" v-bind:key="anew">
                <div class="news">
                    <h4>{{anew.title }}</h4>
                    <div>{{ anew.author }}, {{ anew.creationDate }}</div>
                    <table class="aligned">
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
            this.$http.get("http://localhost:8081/news").then(response => response.data).then(response => {
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
        display: block;
        margin: 0 5rem;
    }
    a {
        color: #42b983;
    }
    p.news {
        font-family: Georgia,"Times New Roman",Times,serif;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 1em;
        margin-inline-end: 1em;
        text-align: justify;
    }
    div.news {
        border-color: #753836;
        border-style: solid;
        border-width: medium;
        border-radius: 5px;
        display: block;
    }
    .aligned {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 1em;
        margin-inline-end: 1em;
    }
</style>
