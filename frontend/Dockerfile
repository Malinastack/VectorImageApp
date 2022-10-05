FROM node:14-slim

WORKDIR /frontend

COPY entrypoint.sh /usr/local/bin/docker-entrypoint.sh

COPY . /frontend/

RUN yarn install --frozen-lockfile

CMD ["yarn", "start"]