FROM node:apline

WORKDIR '/APP'
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start"]