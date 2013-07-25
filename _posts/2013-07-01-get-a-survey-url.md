---
category: survey
path: '/survey'
title: 'Get a survey (new or existing)'
type: 'POST'
params: 'SERVER ID'

layout: nil
---

This method is meant to test the API in the browser. It is probably not of any practical use as the POST version is the one to use to integrate enketo.

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in \[SERVER\]\/formList.
* The headers must include a **valid authentication token**.

```Authentication: basic [API_TOKEN]:```

### Response

Sends back on object including the url property which contains the enketo webform.

```Status: 200 OK (if it already existed)    Status: 201 OK (if the url was newly generated)```
```{
    url:  'https://abcde.enketo.org/webform',
    name: 'My first thing',
    code: '200'
}```