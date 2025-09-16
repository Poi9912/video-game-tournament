#FROM node:24.8.0-alpine3.22
FROM alpine:3.22.1
RUN apk add --no-cache bash curl nodejs npm
RUN npm i -g @stoplight/prism-cli
COPY start.sh .
EXPOSE 4010
CMD [ "sh","start.sh"]