---
categories: [v2, survey, single, iframe]
title: Get a online-only single-use iframe-able survey (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
  - name: defaults
    required: false
  - name: parent_window_origin
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 the defaults and parent_window_origin parameters were added.
---

### Response

Sends back an object including an single_iframe_url property.

```Status: 200 OK (if it already existed)```
```{
    "single_url": "https://enke.to/single/i/::abcd",
    "code": 200
}```
