---
categories: [v2, survey, offline]
title: Get an offline-capable survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an offline-capable survey.
changes: 
  - This endpoint is new in API v2.
---

### Response

Sends back an object including a url property.

```Status: 200 OK (existing)  Status: 201 OK (new)```
```{
    "offline_url": "https://enke.to/abcd",
    "code": 200
}```
