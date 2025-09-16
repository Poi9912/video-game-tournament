FROM node:24.8.0-alpine3.22 AS builder
WORKDIR /api
COPY package.json .
COPY package-lock.json .
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:24.8.0-alpine3.22 AS runner
WORKDIR /api
COPY --from=builder /api/dist /api/dist
COPY --from=builder /api/package.json ./
COPY --from=builder /api/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node","dist/main"]