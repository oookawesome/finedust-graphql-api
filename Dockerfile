FROM node:10.3.0

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 3000

ENV FINEDUST_API_SERVICE_KEY yourapiservicekey

CMD [ "npm", "start" ]



