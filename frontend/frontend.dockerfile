FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm i --loglevel verbose
COPY . .
RUN npm run build
RUN npm install -g pm2
EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start", "npm", "--", "start"]

