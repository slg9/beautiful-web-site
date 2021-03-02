#build
FROM node:13.12.0-alpine as build
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm i -g serve 
RUN npm i
RUN npm run build
CMD serve -p $PORT -s dist
