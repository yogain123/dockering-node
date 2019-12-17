FROM node:alpine

WORKDIR /usr/app/dockering-node

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]