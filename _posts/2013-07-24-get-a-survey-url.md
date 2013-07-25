---
category: survey
path: '/survey'
title: 'Get a survey (existing)'
type: 'GET'

layout: nil
---

This method is meant to test the API in the browser. It is probably not of any practical use as the POST version is the one to use to integrate enketo.

### Request

* required parameter **`server_url`** is the url of the OpenRosa server your form is hosted on.
* required parameter **`form_id`** is the ID of the form listed in \[SERVER\]\/formList.
* The headers must include a **valid authentication token**.

```Authentication: basic [API_TOKEN]:```

### Response

Sends back on object including the url property which contains the enketo webform if it exists (i.e. if it has been launched on enketo before with POST).

```Status: 200 OK```
```{
    url:  'https://abcde.enketo.org/webform',
    name: 'My first thing'
}```

For error responses, see the [response status codes documentation](#response-status-codes).

### Try in browser

[{{site.api_url}}{{path}}?server_url=[SERVER]&form_id=[ID]]({{site.api_url}}{{path}}?server_url=[SERVER]&form_id=[ID])


### Try in command line

```curl {{site.api_url}}{{path}}?server_url=[SERVER]&form_id=[ID] -3```