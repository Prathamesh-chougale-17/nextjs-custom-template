FROM node:alpine3.20

# Create app directory

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# EXPOSE 3000

CMD ["npm", "start"]