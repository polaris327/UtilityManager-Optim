# Cd optimus prime ui

Frontend of the Cd optimus prime ui by fino digital

## Pre-requisites

Make sure you have finos private npm repo setup on your device. Instructions see: https://gitlab.com/fino/nexus/blob/master/README.md#npm-configuration

## Setup
```
git clone git@gitlab.com:fino/optimusprime-ui.git
cd cd-optimus-prime-ui
npm install
```

## Build & Run

Please ensure you have successfully completed the *Setup*.

```
npm run build
npm run serve:dist
```

or

```
gulp build
http-server ./dist
```

In case you run into the issue of missing the http-server package,
ensure you run the following command and try again:
`npm i http-server -g`

## Develop

Please ensure you have successfully completed the *Setup*.

```
npm run serve
```

or

```
gulp serve
```
