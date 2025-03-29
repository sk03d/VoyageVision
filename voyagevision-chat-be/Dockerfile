#specifying node version
FROM node:18

#working directory
WORKDIR /app

copy package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]
