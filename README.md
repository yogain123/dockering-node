# dockering-node

## Basic docker and docker-compose commands to Run App
- docker build -t yogendra/nodeapp .
- docker run -p 1234:1234 yogendra/nodeapp
- docker-compose up --build
- docker-compose down
- docker version
- docker-compose version
- docker images
- docker ps

> t=> tag, p=> port

## Run App Outside Of Docker Container
``` 
npm install
npm start 
```

## Run App Inside Docker Container (Running only Node Dockerfile)
```
 docker build -t yogendra/dockering-node .
 docker run -p 1234:1234 yogendra/dockering-node
```

## Run App With DB Connection Active (mongo) -> Docker Compose
```
docker-compose up --build   (To Start App)
docker-compose down   (To Stop App)
```
### This Basic Node App is been packed inside docker and the container is been deployed in Heroku
https://dockering-node.herokuapp.com/

## Author
Yogendra Saxena
