---
categories: [v1, survey, all]
title: Get all survey views (existing)
type: GET
params: 
  - name: server_url 
  - name: form_id
  - name: return_url
    required: false
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Response

Sends back an object with various properties.

```Status: 200 OK (if it already existed)```
```{
    "url":                  "https://enke.to/::abcd",
    "iframe_url":           "https://enke.to/i/::abcd",
    "single_url":           "https://enke.to/single/::werdgag3e423gsgadgsd",
    "single_iframe_url":    "https://enke.to/single/i/::werdgag3e423gsgadgsd",
    "preview_url":          "https://enke.to/preview/::abcd",
    "preview_iframe_url":   "https://enke.to/preview/i/::abcd",
    "subdomain":            "",
    "code":                 200
}```
