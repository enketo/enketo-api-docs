---
categories: [v2, surveys, number]
title: Get the number of launched surveys
type: GET
params: 
  - name: server_url
codes: [200, 400, 401, 403, 404, 410]
layout: null
---

### Response

Sends back an object including the number property.

```Status: 200 OK```
```{
    "number": 12,
    "code": 200
}```
