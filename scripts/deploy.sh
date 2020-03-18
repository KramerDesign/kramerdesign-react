#!/bin/bash

DOMAIN=$1
NAME=$2
VERSION=$3

read -p "You are about to deploy to $DOMAIN with $NAME:$VERSION, hit enter" pswd

# prepare folder
ssh dev@$DOMAIN "mkdir -p ~/services/$DOMAIN"

# stop the service
ssh dev@$DOMAIN "cd ~/services/$DOMAIN; docker-compose down" || true

# remove docker images
ssh dev@$DOMAIN "docker images -a | grep \"$NAME\" | awk \"{print $3}\" | xargs docker rmi"

# build docker image locally
docker build -t "$NAME:$VERSION" .

# save docker image as a single zip file
docker save "$NAME:$VERSION" | gzip > ./$NAME.$VERSION.tar.gz

# upload docker image, docker-compose.yml and env files to remote
scp ./$NAME.$VERSION.tar.gz dev@$DOMAIN:~/docker-images
scp ./docker-compose.yml dev@$DOMAIN:~/services/$DOMAIN/docker-compose.yml
scp ./.env dev@$DOMAIN:~/services/$DOMAIN/.env

# remove local docker image file
rm ./$NAME.$VERSION.tar.gz

# load remote docker image file to remote docker runtime
ssh dev@$DOMAIN "gunzip -c ~/docker-images/$NAME.$VERSION.tar.gz | docker load"

# run the remote docker image
ssh dev@$DOMAIN "cd ~/services/$DOMAIN/; docker-compose up -d"