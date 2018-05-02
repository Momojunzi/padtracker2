FROM node:carbon

WORKDIR /usr/src/aapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm", "start"]
