# covid19_news_frontend

## Development Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker
#### Local build and run
build: `docker build . --tag covid-19-vuejs:dev`  
run: `docker run -d -p 8080:8080 --rm --name covid_19_vuejs covid-19-vuejs:dev`. 
stop `docker stop covid_19_vuejs`

## More
More inforamation how to setup all parts of the project check [setup docs](https://github.com/university-soa/covid-19-soa)
