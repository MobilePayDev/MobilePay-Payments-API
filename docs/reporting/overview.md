---
sidebar_position: 1
---


# Overview

Reporting API allows you to query all activities taking place at any of your MobilePay payment locations.

The main objective is to make it easier for you to do reconciliation on your side. We at MobilePay will provide details of transactions to help you with that, with the products that MobilePay offers. This will be done by summarizing payment, fees and refunds etc. These are summarized in further detail below.


## Migration from transaction reporting API

The Reporting API is a newer version of Transaction Reporting API, more about the old API you can find [here](https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/).

Also, you can use this guide on [how to migrate](../guides/reporting/how-to-migrate) from the old API.

## How does it work?

A settlement payout includes all your sales transactions from the previous day, net refunds and fees.
By using the API, you get a full list of all sales transactions and corresponding fees, totalling the settlement on your bank account.
You can reconcile your accounts with a high degree of data and transparency, moving your business towards always having up-to-date financial overviews.

:::note
If you chose to have fees invoiced, then the fees will not be deducted directly by MobilePay, and you instead need to reconcile against the invoices you receive.
Invoiced fees are not visible in the API.
:::

# General notes

:::important

This document does not represent all of the technical information about Reporting API.
This information could be found here.

:::

:::note Payment Point Id

When using the Reporting API, you will be introduced to the term `paymentpointid` - GUID assigned to payment points MobilePay has different API products,
and each product has a payment point. The payment point is named differently across products.

- In Subscriptions, `paymentpointid` is the same as `SubscriptionProviderId`.

- In Invoices, `paymentpointid` is the same as `InvoiceIssuerId`.

- In other products, it should be the same.
:::