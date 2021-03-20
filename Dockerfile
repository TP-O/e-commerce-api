FROM node:15.8.0-alpine

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build
RUN yarn global add pm2

CMD [ "yarn", "prod" ]
