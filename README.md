# panel-react

## Build

```
npm run build
```

## Run

```
npm start
```

## Package

        docker build -t ultz/panel-react:0.1 .

        docker run -it --rm -d -p 7777:80 --name panel-react ultz/panel-react:0.1

        docker tag ohlsen3000/panel-react:0.1 ohlsen3000/panel-react:0.1

        docker push ohlsen3000/panel-react:0.1