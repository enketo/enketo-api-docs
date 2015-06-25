---
title: 'Test Responses'
layout: null
---

### Tests

The following parameters can (and should) be used to write tests for the Enketo API:

* all tests all use API Token `abc` (or missing to test for errors),
* form_id could be any string (or missing to test for errors),


### Success responses

Use the following server_url parameter for success responses:

* `https://testserver.com/bob`


### Error responses

Use the following server_url parameters for error responses:

* `https://testserver.com/noquota` to simulate insufficient quota
* `https://testserver.com/noapi` to simulate no API access
* `https://testserver.com/noquotanoapi` to simulate insufficient quota and no API access
* `https://testserver.com/notpaid` to simulate an inactive account
* `https://testserver.com/notexist` to simulate a non-existing server url or account with that server_url
