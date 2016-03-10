---
categories: [v2, surveys, list]
title: Get the list of launched surveys
type: POST
params: 
  - name: server_url
  - name: defaults
    required: false
  - name: parent_window_origin
    required: false
codes: [200, 400, 401, 403, 404, 410]
layout: null
changes:
  - In API v2 the defaults and parent_window_origin parameters were added.
  - In API v2 the response properties have changed.
---

### Response

Sends back an object with launched forms.

```Status: 200 OK```
```{
     "forms": [
        {
            "server_url":           "https://myserver.com/bob",
            "form_id":              "widgets",
            "enketo_id":            "abcd",
            "url":                  "https://enke.to/::abcd",
            "iframe_url":           "https://enke.to/i/::abcd",
            "offline_url":          "https://enke.to/_/#abcd",
            "single_url":           "https://enke.to/single/i/::werdgag3e423gsgadgsd",
            "single_iframe_url":    "https://enke.to/single/i/::werdgag3e423gsgadgsd",
            "preview_url":          "https://enke.to/preview/::abcd",
            "preview_iframe_url":   "https://enke.to/preview/i/::abcd",
            "enketo_id":            "abcd"
        },
        {
            "server_url":           "https://myserver.com/bob",
            "form_id":              "birds",
            "enketo_id":            "efgh",
            "url":                  "https://enke.to/::efgh",
            "iframe_url":           "https://enke.to/i/::efgh",
            "offline_url":          "https://enke.to/_/#efgh",
            "single_url":           "https://enke.to/single/i/::abcag3e423gsgadgsd",
            "single_iframe_url":    "https://enke.to/single/i/::abcag3e423gsgadgsd",
            "preview_url":          "https://enke.to/preview/::efgh",
            "preview_iframe_url":   "https://enke.to/preview/i/::efgh",
            "enketo_id":            "efgh"
        }
    ],
    "code": 200
}```
