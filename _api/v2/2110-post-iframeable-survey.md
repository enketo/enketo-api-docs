---
categories: [v2, survey, iframe]
title: Get an online-only iframe-able survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
  - name: defaults
    required: false
  - name: parent_window_origin
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
description: This returns an online-only iframe-friendly survey.
changes:
  - In API v2 this returns a response with an iframe_url property.
  - In API v2 the theme, defaults, and parent_window_origin parameters were added.
---

### Response

Sends back an object including the iframe_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "iframe_url":  "https://enke.to/i/abcd",
    "code": 200
}```
