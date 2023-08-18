## Description

A simple Pharmacy Order service integrated with different platforms.
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

### Request: - POST /orders
BODY
```
{
	"product": "Antibiotics",
	"quantity": 2,
	"customer": {
		"name": "",
		"address": "",
	  "city": "string",
	  "state": "string",
		"zipCode": "54321"
	}
}
```
QUERY PARAM:
`type: quickcare`

RESPONSE:
```
{
	"product": "Antibiotics",
	"quantity": 2,
	"customer": {
		"name": "",
		"address": "",
		"city": "string",
		"state": "string",
		"zipCode": "54321"
	},
	"type": "quickcare",
	"id": "700a9ade-50bd-4d91-9e59-05648abcbd90",
	"orderId": "1692338537158"
}
```
### Request: - GET /orders
RESPONSE:
```
[
	{
		"product": "Antibiotics",
		"quantity": 2,
		"customer": {
			"name": "",
			"address": "",
			"city": "string",
			"state": "string",
			"zipCode": "54321"
		},
		"type": "healthmart",
		"id": "d73d5c48-51ca-4908-b3b7-54af10eb9476",
		"orderId": "1692338099496"
	},
	{
		"product": "Antibiotics",
		"quantity": 2,
		"customer": {
			"name": "",
			"address": "",
			"city": "string",
			"state": "string",
			"zipCode": "54321"
		},
		"type": "healthmart",
		"id": "ca20e60e-0c20-4341-ab35-b51399daf1ab",
		"orderId": "1692338102565"
	},
	{
		"product": "Antibiotics",
		"quantity": 2,
		"customer": {
			"name": "",
			"address": "",
			"city": "string",
			"state": "string",
			"zipCode": "54321"
		},
		"type": "healthmart",
		"id": "73e1948f-eb65-408f-9e2e-a265cb6d2591",
		"orderId": "1692338103761"
	}
]
```