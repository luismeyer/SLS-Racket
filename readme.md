# Racket SLS

A Racket Rest Api which can be deployed to AWS Lambda with a restdb.io Database and Vue frontend.

## SETUP

Install [Racket](https://docs.racket-lang.org/pollen/Installation.html) and docker.  
Create a secrets.yml based on the example file

## Vue development

```bash
npm run vue:dev
npm run sls:dev
```

## Racket development

```bash
npm run api:watch
npm run sls:dev
```

## Deployment

Build the Docker Container and build the Racket Application

```bash
npm run docker:build
npm run api:build:prod
npm run sls:deploy:prod
```

Now deploy the Lambda to AWS

```bash
npm run sls:deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
