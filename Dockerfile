# build stage
FROM node:lts-alpine as build-stage
RUN apk update && \
    apk upgrade && \
    apk add git && \
    apk add openssh
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
