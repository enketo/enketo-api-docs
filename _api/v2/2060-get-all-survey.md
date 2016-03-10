---
categories: [v2, survey, all]
title: Get all survey views (existing)
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
  - The response property names have changed in API v2.
  - In API v2 the defaults and parent_window_origin parameters were added.
---

### Response

Sends back an object with various properties.

```Status: 200 OK (if it already existed)```
```{
    "url":                  "https://enke.to/::abcd",
    "iframe_url":           "https://enke.to/i/::abcd",
    "offline_url":          "https://enke.to/_/#abcd",
    "single_url":           "https://enke.to/single/i/::werdgag3e423gsgadgsd",
    "single_iframe_url":    "https://enke.to/single/i/::werdgag3e423gsgadgsd",
    "preview_url":          "https://enke.to/preview/::abcd",
    "preview_iframe_url":   "https://enke.to/preview/i/::abcd",
    "enketo_id":            "abcd",
    "code":                 200
}```
