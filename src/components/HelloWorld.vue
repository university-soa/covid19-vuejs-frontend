<template>
    <div class="hello">
        <h1>Response: {{res}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                res: ""
            }
        }
        ,
        created() {
            // Listen to score changes coming from SignalR events
            this.$questionHub.$on('covid19-info', this.onScoreChanged);
        },
        beforeDestroy () {
            // Make sure to cleanup SignalR event handlers when removing the component
            this.$questionHub.$off('covid19-info');
        },
        methods: {
            // This is called from the server through SignalR
            onScoreChanged({res}) {
                this.res = res;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
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
</style>
