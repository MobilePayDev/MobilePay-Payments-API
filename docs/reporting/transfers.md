# Retrieve transfers

:::note
Usually accumulated payment point balance is transferred once per day to a specified merchant account.
You might have to wait until the next day to get a transfer and for the funds to appear in the bank account.
:::

## Get a single transfer

Returns a list of completed transfers for a payment point.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/transfers/3fa85f64-5717-4562-b3fc-2c963f66afa6' \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reference": "string",
  "date": "string",
  "totalTransferredAmount": 0,
  "currencyCode": "string"
}
```

## Retrieve a list of transfers

Returns a list of completed transfers for a payment point.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/transfers?pagesize=1000&pagenumber=1' \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "transfers": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "reference": "string",
      "date": "string",
      "totalTransferredAmount": 0,
      "currencyCode": "string"
    }
  ]
}
```