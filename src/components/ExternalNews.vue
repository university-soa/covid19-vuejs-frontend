<template>
    <div class="hello">
        <br>
        <h2>External News</h2>
        <ul>
            <div v-if="result">The news cannot be loaded. Problem is: {{result}}</div>
            <li v-for="anew in news" v-bind:key="anew.path">
                <div class="news">
                    <h4>{{anew.title }}</h4>
                    <div>{{ anew.source.name }}, {{ anew.publishedAt }}</div>
                    <p class="news">{{anew.content}}</p>
                    See more here: <a :href="anew.url">{{anew.url}}</a>
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
            this.$http.get(process.env.VUE_APP_EXTERNAL_NEWS_ENDPOINT).then(response => this.news = response.data.articles).catch(e => this.result = e);
        }
    }
</script>

<style lang="scss" scoped>
    @import './../css/news.css';
</style>
