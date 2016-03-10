---
categories: [v2, survey, single]
title: Get an online-only single-use survey (new or existing)
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
  - In API v2 the theme and defaults parameters were added.
---

### Response

Sends back an object including an iframe_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "single_url": "https://enke.to/single/::abw3e325tt2gdsgsfd",
    "code": 200
}```
