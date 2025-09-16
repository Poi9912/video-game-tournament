FROM node:24.8.0-alpine3.22
WORKDIR /api
COPY . .
EXPOSE 3000
RUN npm i --legacy-peer-deps
CMD ["npm","run","start"]