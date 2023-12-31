# swagger-client
This is an example of using OAuth2 Access Code Flow in a specification to describe security to your API.

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.python.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import swagger_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import swagger_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: accessCode
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))

try:
    # authentication
    api_response = api_instance.authenticate_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->authenticate_get: %s\n" % e)

# create an instance of the API class
api_instance = swagger_client.DefaultApi(swagger_client.ApiClient(configuration))

try:
    # authorization
    api_instance.authorize_get()
except ApiException as e:
    print("Exception when calling DefaultApi->authorize_get: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/VIRAREE_1/bank-access-api/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**authenticate_get**](docs/DefaultApi.md#authenticate_get) | **GET** /authenticate | authentication
*DefaultApi* | [**authorize_get**](docs/DefaultApi.md#authorize_get) | **GET** /authorize | authorization

## Documentation For Models

 - [Secret](docs/Secret.md)

## Documentation For Authorization


## accessCode

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: http://bankapi.com/oauth/auth
- **Scopes**: 
 - **write**: allows modifying resources
 - **read**: allows reading resources


## Author


