---
sidebar_position: 1
---

# Getting started

You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.

## Step 1 - Register

All merchants should order the product needed on the MobilePay portal [here](https://admin.mobilepay.dk/). If you are a Third Party integrator and don't have an agreement with MobilePay sign up [here](https://www.mobilepaygroup.com/partner/signup). When the sign up have been approved by our business representatives we will contact your technical contact in order to start the integration process.

## Step 2 - API documentation

Take a look at the API documentation. From the API-page you're able to call the api and get the appropiate responses. You'll find it in the API references:

* [App Payments](/api/app-payments)
* [Webhooks](/api/wehooks)

## Step 3 - Authentication

In order to do authentication you must either use API-key or the OAuth flow if you are an integrator doing the integration on behalf of merchants.

* API keys: This is a simple solution aimed at merchants integrating on their own behalf. They are used to get unlimited access to resources in your merchant account. These are retrieved through the MobilePay Portal. If you choose this option you simply need to retrieve the API key from the MobilePay portal to get started.
* OAuth: This is aimed at larger merchants or integrators integrating on behalf of one or more merchants. It is used to get authenticated and scoped access to any MobilePay merchant account. Use them when your application will access resources on behalf of multiple MobilePay merchant accounts, i.e. you are an integrator. If you choose this option please contact developer@mobilepay.dk to get started.

During the technical onboarding pelase inform us which authentication method you wish to use.
