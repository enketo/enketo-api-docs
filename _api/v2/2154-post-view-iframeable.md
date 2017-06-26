---
categories: [v2, survey, view, iframe]
title: Get a read-only iframe-able survey (new or existing)
description: This view shows an empty readonly iframe-able form.
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: go_to
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
changes: 
  - This endpoint is new in API v2.
---

### Response

Sends back an object including a view_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "view_iframe_url":  "https://enke.to/view/::abcd232agdf3434sgdra34",
    "code": 200
}```
