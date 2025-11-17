FROM node:18-alpine

WORKDIR /srv/app

COPY package.json package-lock.json* ./

RUN npm install || npm install --legacy-peer-deps

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
