---
categories: [v2, survey, cache]
title: Flush a survey cache
description: Remove the cached survey transformation results from Enketo. To be used when an already-launched XForm has been edited and is re-published. Highly recommended to use this **only when necessary** to avoid severe loading performance degradation.
type: DELETE
params: 
  - name: server_url 
  - name: form_id
codes: [204, 400, 401, 403, 404, 405, 410]
layout: null
changes:
  - This endpoint is new in API v2.
---

### Response

```Status: 204 OK (found and flushed)```
```[EMPTY]```
