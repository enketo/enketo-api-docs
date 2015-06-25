---
category: survey
path: '/survey/single/iframe'
title: 'Get a single-use iframe-able survey (new or existing)'
type: 'POST'
params: 'server_url form_id'
codes: [200, 400, 401, 403, 404, 405, 410]
layout: null
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* optional parameter **`return_url`** is the URL to redirect the user to after submission.
* The headers must include a **valid authentication token**.

```Authorization: Basic API_TOKEN:```

### Response

Sends back an object including an single_iframe_url property.

```Status: 200 OK (existing)    Status: 201 OK (new)```
```{
    single_url:  'https://abcde.enketo.org/webform/single?iframe=true',
    code: '200'
}```
