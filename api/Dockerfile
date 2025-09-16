FROM node:24.8.0-alpine3.22
WORKDIR /api
COPY package.json .
RUN npm i --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]