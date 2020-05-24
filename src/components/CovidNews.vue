<template>
    <div class="hello">
        <br>
        <h2>Covid19 News</h2>
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
