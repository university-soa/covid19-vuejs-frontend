<template>
    <div class="hello">
        <br>
        <h2>Covid19 News</h2>
        <ul>
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
        name: 'CovidNews',
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

<style lang="scss" scoped>
    @import './../css/news.css';
</style>
