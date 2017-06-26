---
categories: [v2, survey, single, once]
title: Get an online-only single-submit survey that can be submitted once per user (new)
description: This webform view will **always** redirect the user upon successful submission of a single record. It has some basic protection to prevent the same user (browser & device) from submitting more than once.
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
  - name: defaults
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - This endpoint is new in API v2.
---

### Response

Sends back an object including an single_once_url property.

```Status: 200 OK (if it already existed)```
```{
    "single_once_url": "https://enke.to/single/::werdgag3e423gsgadgsd",
    "code": 200
}```
