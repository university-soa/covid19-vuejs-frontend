import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
export default {
    install(Vue) {
        const connection = new HubConnectionBuilder()
            .withUrl(`${process.env.VUE_APP_COVID_CASES_HOST}/covid19InfoHub`)
            .configureLogging(LogLevel.Information)
            .build();

        // use new Vue instance as an event bus
        const questionHub = new Vue();
        // every component will use this.$questionHub to access the event bus
        Vue.prototype.$questionHub = questionHub;
        // Forward server side SignalR events through $questionHub, where components will listen to them
        connection.on("UpdateCovid19Info", (content) => {
            var contentJson = JSON.parse(content);
            questionHub.$emit("covid19-info", { contentJson });
        });

        let startedPromise = null;
        function start() {
            startedPromise = connection.start().catch(err => {
                console.error("Failed to connect with hub", err);
                return new Promise((resolve, reject) =>
                    setTimeout(
                        () =>
                            start()
                                .then(resolve)
                                .catch(reject),
                        5000
                    )
                );
            });
            return startedPromise;
        }
        connection.onclose(() => start());

        start();
    }
};
