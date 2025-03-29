#specifying version of node and alpine is fast and light weight
FROM node:18-alpine

#working directory
WORKDIR /app

#copying dependencies
COPY package*.json ./

#installing dependencies
RUN npm install

#copying to container from local
COPY . .

#exposing working port
EXPOSE 8080

#starting the server
CMD ["npm","run","dev","--","--host"]
