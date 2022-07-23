FROM node:18 as build

LABEL author hieudoanm

COPY . .

RUN yarn install --frozen-lockfile && yarn build

FROM node:18-alpine

USER node

EXPOSE $PORT

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./

RUN yarn install --frozen-lockfile --production

CMD ["yarn", "start"]
