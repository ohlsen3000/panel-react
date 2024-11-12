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