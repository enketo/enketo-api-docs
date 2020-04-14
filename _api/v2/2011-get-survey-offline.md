---
categories: [v2, survey, offline]
title: Get an offline-capable survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an offline-capable survey.
changes: 
  - This endpoint is new in v2.
---

### Response

Sends back an object including a url property if it exists (i.e. if it has been launched on enketo before with POST).

```Status: 200 OK```
```{
    "offline_url": "https://enke.to/abcd",
    "code": 200
}```
