---
category: survey
path: '/survey'
title: 'Get a survey (existing)'
type: 'GET'
params: 'server_url form_id'
layout: nil
---

This method is meant to test the API in the browser. It is probably not of any practical use as the POST version is the one to use to integrate enketo.

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* The headers must include a **valid authentication token**.

```Authentication: basic _API_TOKEN_:```

### Response

Sends back on object including the url property which contains the enketo webform if it exists (i.e. if it has been launched on enketo before with POST).

```Status: 200 OK```
```{
    url:  'https://abcde.enketo.org/webform',
    name: 'My first thing',
    code: '200'
}```