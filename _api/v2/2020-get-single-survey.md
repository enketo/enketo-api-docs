---
categories: [v2, survey, single]
title: Get an online-only single-submit survey (existing)
description: This webform view will **always** redirect the user upon successful submission of a record.
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
  - name: allow_multiple
    required: false
  - name: defaults
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 the defaults parameter was added.
  - In API v2 the allow_multiple parameter was added.
---

### Response

Sends back an object including an single_url property.

```Status: 200 OK (if it already existed)```
```{
    "single_url": "https://enke.to/single/::abcd",
    "code": 200
}```
