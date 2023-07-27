import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
from pymongo import MongoClient

# create an instance of the API class

api_instance = swagger_client.DefaultApi()
#admin_app_instance=admin_app.DevelopersApi()




try:
    # Get list of exposure types
    #api_response = api_instance.exposures_get()
    api_response = api_instance.authenticate_get()
    pprint(api_response)
    

except ApiException as e:
    print("Exception when calling DefaultApi->exposures_get: %s\n" % e)