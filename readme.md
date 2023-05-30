## Endpoint: POST /api/register
This endpoint should allow users to register.
### Request Body:
```{
  name: String,
  email: String,
  password: String
}
```
	

## Endpoint: POST /api/login	
This endpoint should allow users to login.
### Request Body:
```{
  email: String,
  password: String
}
```
	
## Endpoint: GET /api/flights	
This endpoint should return a list of all available flights.
### Response Body:
```{
"msg": "these are all the bookings",
    "data": [
        {
            "_id": "6475a57c81ced001a99aaaa8",
            "user": {
                "_id": "64759f0235a89cabe2cff106",
                "name": "harshit sahu",
                "email": "harshit.sahu@gmail.com",
                "password": "qwerty",
                "__v": 0
            },
            "flight": {
                "_id": "6475a16917db330bf6380393",
                "airline": "airindia",
                "flightNo": "786",
                "departure": "delhi",
                "arrival": "mumbai",
                "departureTime": "2023-05-30T07:10:33.712Z",
                "arrivalTime": "2023-05-30T07:10:33.712Z",
                "seats": 4,
                "price": 456,
                "__v": 0
            },
            "__v": 0
        },
        // additional flights
    ]
}
```

## Endpoint: GET /api/flights/:id	
This endpoint should return the details of a specific flight identified by its ID.
### Response Body:
```{
"msg": "this is the flight",
    "data": {
            "_id": "6475a57c81ced001a99aaaa8",
            "user": {
                "_id": "64759f0235a89cabe2cff106",
                "name": "harshit sahu",
                "email": "harshit.sahu@gmail.com",
                "password": "qwerty",
                "__v": 0
            },
            "flight": {
                "_id": "6475a16917db330bf6380393",
                "airline": "airindia",
                "flightNo": "786",
                "departure": "delhi",
                "arrival": "mumbai",
                "departureTime": "2023-05-30T07:10:33.712Z",
                "arrivalTime": "2023-05-30T07:10:33.712Z",
                "seats": 4,
                "price": 456,
                "__v": 0
            },
            "__v": 0
        }
}
```
	
## Endpoint: POST /api/flights	
This endpoint should allow users to add new flights to the system.
### Request Body:
```{
  "airline": "airindia",
  "flightNo": "786",
  "departure": "delhi",
  "arrival": "mumbai",
  "seats": "4",
  "price": "456"
}
```
	
## Endpoint: PUT /api/flights/:id	
This endpoint should allow users to update the details of a specific flight identified by its ID.
### Request Body:
```{
"airline": "airindia",
  "flightNo": "786",
  "departure": "delhi",
  "arrival": "mumbai",
  "seats": "4",
  "price": "456"    
}
```
	
## Endpoint: DELETE /api/flights/:id	
This endpoint should allow users to delete a specific flight identified by its ID.

	
## Endpoint: POST /api/booking	
This endpoint should allow the user to book flights.
### Request Body:
```{
     "user" : "64759f0235a89cabe2cff106",
	 "flight" : "6475a16917db330bf6380393"
}
```
	
## Endpoint: GET /api/dashboard	
This point should list all the bookings so far with the user and flight details.
### Response Body:
```{
 "msg": "these are all the bookings",
    "data": [
        {
            "_id": "6475a57c81ced001a99aaaa8",
            "user": {
                "_id": "64759f0235a89cabe2cff106",
                "name": "harshit sahu",
                "email": "harshit.sahu@gmail.com",
                "password": "qwerty",
                "__v": 0
            },
            "flight": {
                "_id": "6475a16917db330bf6380393",
                "airline": "airindia",
                "flightNo": "786",
                "departure": "delhi",
                "arrival": "mumbai",
                "departureTime": "2023-05-30T07:10:33.712Z",
                "arrivalTime": "2023-05-30T07:10:33.712Z",
                "seats": 4,
                "price": 456,
                "__v": 0
            },
            "__v": 0
        }
    ]
}
```
	
