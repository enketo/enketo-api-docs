---
categories: [v2, instance]
title: Post an instance for editing
description: This webform view edits an existing already-submitted finalized record.
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: instance
  - name: instance_id
  - name: instance_attachments
    required: false
  - name: return_url
    required: false
  - name: go_to
    required: false
codes: [201, 400, 401, 403, 404, 405, 410]
layout: null
changes: 
  - In API v2 the instance_attachments, and go_to parameters were added.
---

### Response

Sends back an object including a edit_url property. You should redirect the user to this temporary URL immediately. Nother that this method will never return a 200. To (somewhat) protect agains two persons editing the same instance simultaneously, the instance is saved only temporarily in enketo (1 minute max) and during this time, a subsequent request will return **`405 Not Allowed`**.

```Status: Status: 201 OK```
```{
    "edit_url": "https://enke.to/edit/::abcd?instance_id=324sfasgsa324",
    "code": 201
}```
