---
categories: [v1, survey, iframe]
title: Get an iframe-able survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an online-only iframe-friendly survey.
---

### Response

Sends back an object including the url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "url":  "https://enke.to/i/abcd",
    "code": 200
}```
