# job-task-wander-women

## application-installation :

# dev-dependencies:

typescript,
ts-node-dev,
lint-staged,
husky (Pre-commit hook for check lint-prettier),
eslint-config-prettier,

# dependencies :

zod,
prettier,
mongoose,
jsonwebtoken,
http-status,
express,
eslint,
dotenv,
cors,
express,
cookie-parser,
bcrypt

## Run this application

Yarn start

# check prettire

yarn prettier:check

# check lint

yarn lint:check

# user Registration:

api: http://localhost:5000/api/v1/users/create-user

# sample json:

{
"name":"ashik34",
"email":"ashik455@gmail.com",
"password":"123456",
"role":"admin"
}

## Auth

# login user

api: http://localhost:5000/api/v1/auth/login

# sample-json:

{
"email": "ashik455@gmail.com",
"password": "123456"
}

# result:

{
"statusCode": 200,
"success": true,
"message": "login Successful",
"data": {
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJhc2hpazQ1NUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk2Nzc1MDcsImV4cCI6MTcwNDg2MTUwN30.8PfwWMRg8gb6w4h6XIZEC-3TdXPqwzQaSgIr-d2HLhM"
}
}

# refresh-token (user hit this api after expired the access token)

api: http://localhost:5000/api/v1/auth/refresh-token

# result:

{
"statusCode": 200,
"success": true,
"message": null,
"data": {
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaGlrQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5OTY3MDU4NywiZXhwIjoxNzA0ODU0NTg3fQ.HnHqKhFSg7k3yrsd6giZYnDCIzy-IDqE8_lanvaklgo"
}
}

## Travel Itinerary

# create : have access admin

api: http://localhost:5000/api/v1/travel/create-tour

# sample-json:

{
"tripName": "Fall and Vacation",
"startDate": "2023-07-01T00:00:00.000Z",
"endDate": "2023-07-15T00:00:00.000Z",
"destinations": ["Paris", "Barcelona", "Rome"],
"activities": ["Sightseeing", "Exploring", "Cuisine Tasting"],
"transportationDetails": [
{
"mode": "Flight",
"departureCity": "Your City",
"arrivalCity": "Paris",
"departureTime": "2023-07-01T08:00:00.000Z",
"arrivalTime": "2023-07-01T12:00:00.000Z",
"flightNumber": "ABC123"
},
{
"mode": "Train",
"departureCity": "Paris",
"arrivalCity": "Barcelona",
"departureTime": "2023-07-05T10:00:00.000Z",
"arrivalTime": "2023-07-05T15:00:00.000Z",
"flightNumber": null
},
{
"mode": "Flight",
"departureCity": "Barcelona",
"arrivalCity": "Rome",
"departureTime": "2023-07-10T09:00:00.000Z",
"arrivalTime": "2023-07-10T12:30:00.000Z",
"flightNumber": "DEF789"
}
],
"accommodationDetails": [
{
"hotelName": "Charming Hotel Paris",
"address": "123 Rue de la Paix, Paris",
"checkIn": "2023-07-01T14:00:00.000Z",
"checkOut": "2023-07-05T12:00:00.000Z"
},
{
"hotelName": "Cozy Boutique Hotel",
"address": "456 Carrer de Mallorca, Barcelona",
"checkIn": "2023-07-05T16:00:00.000Z",
"checkOut": "2023-07-10T11:00:00.000Z"
},
{
"hotelName": "Grand Hotel Rome",
"address": "789 Via Nazionale, Rome",
"checkIn": "2023-07-10T14:00:00.000Z",
"checkOut": "2023-07-15T12:00:00.000Z"
}
],
"userData":"654f0532f423acd44cdbbf73"

}

# get-all-data-pagination,sort,search,filter : have access admin and viewer

## This api's are same

api: http://localhost:5000/api/v1/travel/?page=1&limit=2&searchFiled=Summer

get all : http://localhost:5000/api/v1/travel/

# get single data : have access admin and viewer

api: http://localhost:5000/api/v1/travel/654ef37adfda0dcaea37a41a

# update data: access only admin

api : http://localhost:5000/api/v1/travel/update-travel-data/654ef37adfda0dcaea37a41a

# delete data : access only admin

api :http://localhost:5000/api/v1/travel/654ef4a95204f99acf7bce5e
