FROM node:14

WORKDIR /usr/src/app

COPY ./lab3v2/frontend/package*.json ./

RUN npm install

COPY ./lab3v2/frontend .

EXPOSE 3000

CMD ["npm", "start"]