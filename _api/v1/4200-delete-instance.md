---
categories: [v1, instance]
title: Delete a temporary instance
type: DELETE
params: 
  - name: server_url 
  - name: form_id 
  - name: instance_id
codes: [204, 400, 401, 403, 404, 405, 410]
layout: null
description: This method may not have a practical use as instances POSTed to enketo for editing are only cached/saved very briefly (available for a maximum of 1 minute).
---

### Response


```Status: 204 OK (found and removed)```
```[EMPTY]
```
