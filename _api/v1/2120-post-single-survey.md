---
categories: [v1, survey, single]
title: Get a single-use survey (new or existing)
type: POST
params: 
  - name: server_url 
  - name: form_id
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* optional parameter **`return_url`** is the URL to redirect the user to after submission.
* The headers must include a **valid API key as username in the Authorization header**.

```Authorization: Basic API_KEY:```

### Response

Sends back an object including an single_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    "single_url": "https://enke.to/single/::abw3e325tt2gdsgsfd",
    "code": 200
}```
