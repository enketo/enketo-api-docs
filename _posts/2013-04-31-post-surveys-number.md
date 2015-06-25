---
category: surveys
path: '/surveys/number'
title: 'Get the number of launched surveys'
type: 'POST'
params: 'server_url'
codes: [200, 400, 401, 403, 404, 410]
layout: null
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* The headers must include a **valid authentication token**.

```Authorization: Basic API_TOKEN:```

### Response

Sends back an object including the number property.

```Status: 200 OK (existing)```
```{
    'number':  12,
    'code':    '200'
}```
