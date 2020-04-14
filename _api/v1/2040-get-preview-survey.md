---
categories: [v1, survey, preview]
title: Get a survey preview (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Response

Sends back an object including a preview_url property which contains the enketo webform.

```Status: 200 OK (if it already existed)```
```{
    "preview_url": "https://enke.to/preview/abcd",
    "code": 200
}```
