FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]

ENTRYPOINT ["node", "changeCalculator.js"]