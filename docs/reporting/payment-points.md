---
sidebar_position: 3
---

# Retrieve payment points

This topic explains what payment points are and how to retrieve them.

## Retrieve a list of payment points

Returns Payment Points owned by a given Merchant based on the access token acquired from Merchant Authentication.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/paymentpoints?pagesize=1000&pagenumber=1' \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "paymentpoints": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "productType": "string",
      "alias": "string"
    }
  ]
}
```