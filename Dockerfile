FROM node:latest

# Create app directory
WORKDIR /d/Documents/GitHub/tasklist-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]