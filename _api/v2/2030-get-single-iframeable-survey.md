---
categories: [v2, survey, single, iframe]
title: Get a online-only single-submit iframe-able survey (existing)
description: This webform view will **always** redirect the user upon successful submission of a record.
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
  - name: allow_multiple
    required: false
  - name: defaults
    required: false
  - name: parent_window_origin
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - In API v2 the defaults and parent_window_origin parameters were added.
  - In API v2 the allow_multiple parameter was added.
---

### Response

Sends back an object including an single_iframe_url property.

```Status: 200 OK (if it already existed)```
```{
    "single_iframe_url": "https://enke.to/single/i/::abcd",
    "code": 200
}```
