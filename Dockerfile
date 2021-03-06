FROM node:alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn prisma generate
RUN yarn build

EXPOSE 3000
CMD yarn start
