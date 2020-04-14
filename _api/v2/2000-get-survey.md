---
categories: [v2, survey]
title: Get an online-only survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: defaults
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 this always returns an online-only survey.
  - In API v2 the defaults parameter was added.
---

### Response

Sends back an object including a url property if it exists (i.e. if it has been launched on enketo before with POST).

```Status: 200 OK```
```{
    "url": "https://enke.to/abcd",
    "code": 200
}```
