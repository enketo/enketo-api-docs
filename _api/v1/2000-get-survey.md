---
categories: [v1, survey]
title: Get a survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an offline-capable survey, unless the Enketo server does not have offline-capable surveys enabled, in which case it returns an online-only survey.
---

### Response

Sends back an object including a url property if it exists (i.e. if it has been launched on enketo before with POST).

```Status: 200 OK```
```{
    "url": "https://enke.to/abcd",
    "code": 200
}```
