---
categories: [v1, survey, single, iframe]
title: Get a single-use iframe-able survey (new or existing)
type: POST
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

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "single_url": "https://enke.to/single/i/aberj32wrkjdgkajahg",
    "code": 200
}```
