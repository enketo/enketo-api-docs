---
categories: [v2, survey, preview, iframe]
title: Get an iframe-able survey preview (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: defaults
    required: false
  - name: go_to
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 the defaults and go_to parameters were added.
---

### Response

Sends back an object including a preview_url property.

```Status: 200 OK (if it already existed)```
```{
    "preview_iframe_url": "https://enke.to/preview/abcd",
    "code": 200
}```
