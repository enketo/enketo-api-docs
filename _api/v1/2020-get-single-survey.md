---
categories: [v1, survey, single]
title: Get a single-use survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Response

Sends back an object including an single_url property.

```Status: 200 OK (if it already existed)```
```{
    "single_url": "https://enke.to/single/::abcd",
    "code": 200
}```
