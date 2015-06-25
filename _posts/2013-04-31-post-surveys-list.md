---
category: surveys
path: '/surveys/list'
title: 'Get the list of launched surveys'
type: 'POST'
params: 'server_url'
codes: [200, 400, 401, 403, 404, 410]
layout: nil
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* The headers must include a **valid authentication token**.

```Authorization: Basic API_TOKEN:```

### Response

Sends back an object with launched forms.

```Status: 200 OK```
```{
     "forms": [
        {
            "server_url": "https://myserver.com/bob",
            "form_id": "widgets",
            "url": "https://widgets.enketo-dev.formhub.org/webform"
        },
        {
            "server_url": "https://myserver.com/bob",
            "form_id": "Birds",
            "url": "https://6eltm.enketo-dev.formhub.org/webform"
        }
    ],
    "code": "200"
}```
