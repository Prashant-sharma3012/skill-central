FROM node:latest

RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]