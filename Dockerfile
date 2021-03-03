#build
FROM node:13.12.0-alpine as build
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm i -g serve 
RUN npm i
RUN npm run build
#FROM nginx
#COPY - from=build /app/build /usr/share/nginx/html
#COPY - from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE $PORT
#CMD ["nginx","-g","daemon off;"]
CMD serve -p $PORT -s build
