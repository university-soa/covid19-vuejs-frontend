<template>
    <div class="cases">
        <h3>Real time information</h3>
        <p class="lastUpdated">Last updated: {{lastUpdated | moment("DD/MM/YYYY HH:mm:ss")}}</p>
        <p class="confirmed">Total confirmed:&nbsp;{{totalConfirmed}}</p>
        <p class="deaths">Total deaths:&nbsp;{{totalDeaths}}</p>
        <p class="recovered">Total recovered:&nbsp;{{totalRecovered}}</p>
    </div>
</template>

<script>
    export default {
        name: 'CovidCases',
        data() {
            return {
                totalConfirmed: 0,
                totalDeaths: 0,
                totalRecovered: 0,
                lastUpdated: null
            }
        },
        created() {
            // Listen to score changes coming from SignalR events
            this.$questionHub.$on('covid19-info', this.onChange);
        },
        beforeDestroy () {
            // Make sure to cleanup SignalR event handlers when removing the component
            this.$questionHub.$off('covid19-info');
        },
        methods: {
            // This is called from the server through SignalR
            onChange(data) {
                this.totalConfirmed = data.contentJson.TotalConfirmed;
                this.totalDeaths = data.contentJson.TotalDeaths;
                this.totalRecovered = data.contentJson.TotalRecovered;
                this.lastUpdated = new Date();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cases {
        max-width: 400px;
        margin: 0 auto;
        padding: 6px;
        border: 3px solid lightgrey;
        border-radius: 5px;
    }
    
    .cases p {
        margin: 0;
        padding: 4px;
        font-size: 18px;
        font-weight: bold;
    }
    
    .cases p.lastUpdated {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 16px;
    }
    
    .cases p.deaths {
        color: darkred;
    }
    
    .cases p.recovered {
        color: #00ac00;
    }
</style>
