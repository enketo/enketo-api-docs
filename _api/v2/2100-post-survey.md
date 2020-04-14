---
categories: [v2, survey]
title: Get an online-only survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
  - name: defaults
    required: false  
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 this always returns an online-only survey.
  - In API v2 the defaults and theme parameters were added.
---

### Response

Sends back an object including a url property.

```Status: 200 OK (existing)  Status: 201 OK (new)```
```{
    "url": "https://enke.to/abcd",
    "code": 200
}```
