---
categories: [v2, survey, view, pdf]
title: Get a PDF of the survey (new or existing)
description: The PDF shows an empty form.
type: POST
params: 
  - name: server_url 
  - name: form_id
  - name: format
    required: false
  - name: margin
    required: false
  - name: landscape
    required: false
codes: [200, 201, 400, 401, 403, 404, 405, 410]
layout: null
changes: 
  - This endpoint is new in API v2.
---

### Response

Sends back a PDF file or a JSON error response.

```Status: 201 OK (existing)    Status: 201 OK (new)```
