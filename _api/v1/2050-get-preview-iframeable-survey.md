---
categories: [v1, survey, preview, iframe]
title: Get an iframe-able survey preview (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Response

Sends back an object including a preview_url property.

```Status: 200 OK (if it already existed)```
```{
    "preview_url": "https://enke.to/preview/::abcd",
    "code": 200
}```
