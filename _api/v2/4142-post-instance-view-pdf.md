---
categories: [v2, instance, view, pdf]
title: Load an instance and view form as PDF.
description: The PDF shows an form with a record.
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
