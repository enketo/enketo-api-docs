---
categories: [v2, survey, all]
path: /survey/all
title: Get all survey views (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: theme
    required: false
  - name: return_url
    required: false
  - name: allow_multiple
    required: false
  - name: defaults
    required: false
  - name: parent_window_origin
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
changes: 
  - The response property names have changed in API v2.
  - In API v2 the theme, defaults, and parent_window_origin parameters were added.
---

### Response

Sends back an object with various properties.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "url":                    "https://enke.to/abcd",
    "iframe_url":             "https://enke.to/i/abcd",
    "offline_url":            "https://enke.to/x/abcd",
    "single_url":             "https://enke.to/single/abcd",
    "single_iframe_url":      "https://enke.to/single/i/abcd",
    "single_once_url":        "https://enke.to/single/werdgag3e423gsgadgsd",
    "single_once_iframe_url": "https://enke.to/single/i/werdgag3e423gsgadgsd",
    "preview_url":            "https://enke.to/preview/abcd",
    "preview_iframe_url":     "https://enke.to/preview/i/abcd",
    "enketo_id":              "abcd",
    "code":                   200
}```
