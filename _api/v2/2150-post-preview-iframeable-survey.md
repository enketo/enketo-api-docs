---
categories: [v2, survey, preview, iframe]
title: Get an iframeable survey preview (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
  - name: defaults
    required: false
  - name: go_to
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 the theme, go_to, and defaults parameters were added.
  - In API v2 the return property was changed to `preview_iframe_url`.
---

### Response

Sends back an object including a preview_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "preview_iframe_url":  "https://enke.to/preview/i/::abcd",
    "code": 200
}```
