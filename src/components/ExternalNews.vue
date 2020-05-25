<template>
    <div class="hello">
        <br>
        <h2>External News</h2>
        <ul>
            <div v-if="result">The news cannot be loaded. Problem is: {{result}}</div>
            <li v-for="anew in news" v-bind:key="anew.path">
                <div class="news">
                    {{anew}}
                    <h4>{{anew.title }}</h4>
                    <div>{{ anew.provider.name }}, {{ anew.publishedDateTime }}</div>
                    <table class="aligned">
                        <tr>
                            keywords:
                            <td v-for="topic in anew.topics" v-bind:key="topic"> #{{topic}}</td>
                        </tr>
                    </table>
                    <p class="news">{{anew.excerpt}}</p>
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
        name: 'ExternalNews',
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

<style lang="scss" scoped>
    @import './../css/news.css';
</style>
