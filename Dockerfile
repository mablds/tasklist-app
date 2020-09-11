FROM node:latest

# Create app directory
WORKDIR /d/Documents/GitHub/tasklist-app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]