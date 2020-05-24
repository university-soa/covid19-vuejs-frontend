﻿import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
export default {
    install(Vue) {
        const connection = new HubConnectionBuilder()
            .withUrl(`${Vue.prototype.$http.defaults.baseURL}/covid19Info`)
            .configureLogging(LogLevel.Information)
            .build();

        // use new Vue instance as an event bus
        const questionHub = new Vue();
        // every component will use this.$questionHub to access the event bus
        Vue.prototype.$questionHub = questionHub;
        // Forward server side SignalR events through $questionHub, where components will listen to them
        connection.on("UpdateCovid19Info", res => {
            questionHub.$emit("covid19-info", { res });
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