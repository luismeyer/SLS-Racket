# Racket SLS

A Racket Server which can be deployed to AWS Lambda with a restdb.io Database and Vue frontend.

## SETUP

Install raco and docker.  
Replace <DATABASE_URL> and <DATABASE_API_KEY> in the "request.rkt" file with your credentials.

## Vue development

```bash
npm run vue:dev
npm run sls:dev
```

## Racket development

```bash
npm run rkt:watch
npm run sls:dev
```

## Deployment

Build the Docker Container and deploy the Racket application

```bash
npm run docker:build
npm run docker:deploy
```

Now deploy the lambda to AWS

```bash
npm run sls:deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
