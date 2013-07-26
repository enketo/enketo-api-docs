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

```Authentication: basic API_TOKEN:```

### Response

Sends back an object with launched forms.

```Status: 200 OK```
```{
    'forms': [
        {
        "form_id" : "Birds",
        "name": "Crowd/Birds",
        "description": "",
        "url": "https://birds.enketo.org/webform",
        "server": "https://formhub.org/formhub_u",
        "delete_allowed" : false
        },
        {
        "form_id" : "Cascading Example"
        "name": "Cascading_Example",
        "description": "",
        "url": "https://cra4e.enketo.org/webform",
        "server": "https://formhub.org/formhub_u"
        "delete_allowed" : true,
        },
        "form_id" : consent_signature",
        "name": "consent_signature",
        "title": "Sample consent form with signature widget.",
        "url": "https://0qpeo.enketo.org/webform",
        "server": "https://formhub.org/formhub_u",
        "delete_allowed" : false
        }
    ],
    'code':    '200'
}```