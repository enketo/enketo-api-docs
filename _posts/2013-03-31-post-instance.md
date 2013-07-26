---
category: instance
path: '/instance'
title: 'Post an instance for editing (return normal url)'
type: 'POST'
params: 'server_url form_id instance instance_id return_url'
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: nil
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* required parameter **`instance`** is the XML instance to be edited.
* required parameter **`instance_id`** is the instanceID (inside the meta node) of instance to be edited.
* required parameter **`return_url`** is the URL to redirect the user to after editing is complete.
* The headers must include a **valid authentication token**.

```Authentication: basic API_TOKEN:```

### Response

Sends back an object including a edit_url property. You should redirect the user to this temporary URL immediately.

```Status: 200 OK (existing)  Status: 201 OK (new)```
```{
    edit_url:  'https://abcde.enketo.org/webform/edit?instance_id=324sfasgsa324',
    code: '200'
}```