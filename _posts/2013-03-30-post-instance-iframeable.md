---
category: instance
path: '/instance/iframe'
title: 'Post an instance for editing (iframeable response)'
type: 'POST'
params: 'server_url form_id instance instance_id return_url'
codes: [201, 400, 401, 403, 404, 405, 410]
layout: null
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* required parameter **`instance`** is the XML instance to be edited.
* required parameter **`instance_id`** is the instanceID (inside the meta node) of instance to be edited.
* required parameter **`return_url`** is the URL to redirect the user to after editing is complete.
* The headers must include a **valid authentication token**.

```Authorization: Basic API_TOKEN:```

### Response

Sends back an object including a edit_url property. You should redirect the user to this temporary URL immediately. Nother that this method will never return a 200. To (somewhat) protect agains two persons editing the same instance simultaneously, the instance is saved only temporarily in enketo (1 minute max) and during this time, a subsequent request will return **`405 Not Allowed`**.

```Status: Status: 201 OK```
```{
    edit_url:  'https://abcde.enketo.org/webform/edit?instance_id=324sfasgsa324&iframe=true',
    code: '201'
}```
