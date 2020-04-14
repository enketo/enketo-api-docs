---
categories: [v1, survey, iframe]
title: Get an iframe-able survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an online-only iframe-friendly survey.
---

### Response

Sends back an object including the url property.

```Status: 200 OK (if it already existed)```
```{
    "url":  "https://enke.to/i/abcd",
    "code": 200
}```
