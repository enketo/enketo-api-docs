---
categories: [v1, surveys, list]
title: Get the list of launched surveys
type: POST
params: 
  - name: server_url
codes: [200, 400, 401, 403, 404, 410]
layout: null
---

### Response

Sends back an object with launched forms.

```Status: 200 OK```
```{
     "forms": [
        {
            "server_url": "https://myserver.com/bob",
            "form_id": "widgets",
            "url": "https://enke.to/::abcd"
        },
        {
            "server_url": "https://myserver.com/bob",
            "form_id": "Birds",
            "url": "https://enke.to/::efgh"
        }
    ],
    "code": 200
}```
