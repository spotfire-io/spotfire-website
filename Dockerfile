FROM node:16 as build-stage
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN apt update && apt install libvips-dev libvips libglib2.0-dev libimagequant-dev gcc -y
RUN yarn install
COPY ./ /app/
COPY .env .env.production 
ENV NODE_ENV production

RUN npm run build

FROM nginx:1.25.3
COPY --from=build-stage /app/public/ /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

