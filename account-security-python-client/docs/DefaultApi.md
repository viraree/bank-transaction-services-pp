# swagger_client.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/VIRAREE_1/bank-access-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate_get**](DefaultApi.md#authenticate_get) | **GET** /authenticate | authentication
[**authorize_get**](DefaultApi.md#authorize_get) | **GET** /authorize | authorization

# **authenticate_get**
> list[Secret] authenticate_get()

authentication

This is an example operation to show how security is applied to the call.

### Example
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
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[Secret]**](Secret.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorize_get**
> authorize_get()

authorization

This operation shows how to override the global security defined above, as we want to open it up for all users.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # authorization
    api_instance.authorize_get()
except ApiException as e:
    print("Exception when calling DefaultApi->authorize_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

