# Polymer, NodeJS, Google App Engine

This is a sample greeting app build on Polymer, Nodejs and hosted on Google App Engine. Read on [Medium](https://medium.com/@aneesshameed/polymer-node-js-google-app-engine-f25c78ed5ea1) more about on how the entire system workd.

For developement and build we use [Polymer CLI](https://github.com/Polymer/polymer-cli). Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com).


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
