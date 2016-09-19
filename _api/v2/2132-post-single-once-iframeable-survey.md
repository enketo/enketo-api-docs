---
categories: [v2, survey, single, once, iframe]
title: Get an online-only single-submit iframe-able survey that can be submitted once per user (new or existing)
description: This webform view will **always** redirect the user upon successful submission of a single record. It has some basic protection to prevent the same user (browser & device) from submitting more than once.
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
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

Sends back an object including an single_once_iframe_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "single_once_iframe_url": "https://enke.to/single/::abw3e325tt2gdsgsfd",
    "code": 200
}```
