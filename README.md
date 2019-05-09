# Polymer, NodeJS, Google App Engine

This is a sample greeting app build on Polymer, Nodejs and hosted on Google App Engine. Read on [Medium](https://medium.com/@aneesshameed/polymer-node-js-google-app-engine-f25c78ed5ea1) more about on how the entire system work. See the app live [here](https://polymer-greets.appspot.com/).

For developement and build we use [Polymer CLI](https://github.com/Polymer/polymer-cli).


### Run Locally

    git clone https://github.com/elifent/polymer-greet
    cd polymer-greet
    polymer serve

This command serves the app at `http://127.0.0.1:8081`.

### Build

    polymer build


```
polymer-greet/
    build/
        default
```

### Preview the build
Start node server to preview default build

    npm start

### deploy
Use google cloud to deploy app on to Google App Engine.

    gcloud init
    gcloud app deploy path/to/apps/app.yaml