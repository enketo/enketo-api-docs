---
title: 'Response status codes'
codes:  [400, 401, 403, 404, 405, 410]
layout: null
---

### Success

Successes differ from errors in that their body may not be a simple response object with a code and a message. The headers however are consistent across all calls:

* `GET`, `POST` returns `200 OK` on success if the information was found,
* `POST ` returns 201 on success if a new database entry was created,
* `DELETE` returns 204, without a body, if the entry was deleted

When [retrieving stuff](#get-a-survey-url) for example:

```Status: 200 OK```
```{
        url: 'https://abcde.enketo.formhub.org/webform',
        code: '200'
}```

### Error

Error responses are returning [standard HTTP error codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) along with a descriptive message:

* The error code is sent back as a status header,
* The body includes an object describing both the code and message (for debugging and/or display purposes),

For a call with an invalid authentication token for example:

```Status: 401 Unauthorized```
```{
    code: '401',
    message: 'Access denied: invalid authentication token.'
}```
