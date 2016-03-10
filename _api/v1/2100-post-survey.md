---
categories: [v1, survey]
title: Get a survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an offline-capable survey, unless the Enketo server does not have offline-capable surveys enabled, in which case it returns an online-only survey.
---

### Response

Sends back an object including a url property.

```Status: 200 OK (existing)  Status: 201 OK (new)```
```{
    "url": "https://enke.to/::abcd",
    "code": 200
}```
