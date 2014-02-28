---
category: instance
path: '/instance'
title: 'Delete a temporary instance'
type: 'DELETE'
params: 'server_url form_id instance_id'
codes: [204, 400, 401, 403, 404, 405, 410]
layout: nil
---

### Request

* this method _may not have a practical use_ as instances POSTed to enketo for editing are only cached/saved very briefly (available for a maximum of 1 minute)
* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in _SERVER_/formList.
* required parameter **`instance_id`** is the instanceID (inside the meta node) of instance to be edited.
* The headers must include a **valid authentication token**.

```Authorization: Basic API_TOKEN:```

### Response


```Status: 204 OK (instance was deleted)```
```{
   [EMPTY]
}```
