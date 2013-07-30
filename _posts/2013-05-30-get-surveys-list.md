---
category: surveys
path: '/surveys/list'
title: 'Get the list of launched surveys'
type: 'GET'
params: 'server_url'
codes: [200, 400, 401, 403, 404, 410]
layout: nil
---

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* The headers must include a **valid authentication token**.

```Authentication: basic API_TOKEN:```

### Response

Sends back an object with launched forms.

```Status: 200 OK```
```{
     "forms": [
        {
            "form_id": "widgets",
            "transform_result_title": "widgets",
            "url": "https:\/\/widgets.enketo-dev.formhub.org\/webform",
            "delete_allowed": false
        },
        {
            "form_id": "Birds",
            "transform_result_title": "Birds",
            "url": "https:\/\/6eltm.enketo-dev.formhub.org\/webform",
            "delete_allowed": false
        }
    ],
    "code": "200"
}```