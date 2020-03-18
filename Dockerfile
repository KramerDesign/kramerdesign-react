FROM node:11.10.0-alpine

ENV PARCEL_WORKERS=1

# copy the src and package.json and tsconfig.json to the docker file
RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN NODE_ENV=development yarn bundle   
RUN NODE_ENV=production yarn build
RUN NODE_ENV=production yarn 

FROM node:11.10.0-alpine

WORKDIR /app

COPY --from=0 /app/build ./build
COPY --from=0 /app/node_modules ./node_modules

EXPOSE 3000

CMD node ./build/index.js
