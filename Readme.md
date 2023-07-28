### Design and Implentatation Document

![BankTransactionServices-DesignAndImplentatation.docx]([https://via.placeholder.com/468x300?text=App+Screenshot+Here](https://github.com/viraree/bank-transaction-services-pp/blob/main/BankTransactionServices-DesignAndImplentatation.docx))


in response to 

Backend Engineer Hiring Challenge

Summary
For an e-Banking Portal you have been given the task to design and implement a reusable REST API for returning the paginated list of money account transactions created in an arbitrary calendar month for a given customer who is logged-on in the portal. For each transaction ‘page’ return the total credit and debit values at the current exchange rate (from the third-party provider). The list of transactions should be consumed from a Kafka topic. Build a Docker image out of the application and prepare the configuration for deploying it to Kubernetes / OpenShift.
Assumptions
* Every e-banking client has one or more accounts in different currencies (e.g. GBP, EUR, CHF)
* There are approximately one hundred thousand e-banking customers, each with a couple thousands of transactions per month.
* The transactions cover the last ten years and are stored in Kafka with the key being the transaction ID and the value the JSON representation of the transaction
* The user is already authenticated and the API client invoking the transaction API will send a JWT token containing the user’s unique identity key (e.g. P-0123456789)
* The exchange rate on any given date is provided by an external API
For simplicity reasons, consider a money account transaction composed of the following attributes:
* Unique identifier (e.g. 89d3o179-abcd-465b-o9ee-e2d5f6ofEld46)
* Amount with currency (eg GBP 100-, CHF 75)
* Account IBAN (eg. CH93-0000-0000-0000-0000-0)
* Value date (e.g. 01-10-2020)
* Description (e.g. Online payment CHF)
Deliverables
Design and implement the microservice using:
* Java
* Spring libraries: web, kafka, data security
* Kubernetes
Focus on aspects such as
* API modeling (Swagger/OpenAPI)
* Security (authentication and authorization)
* Data access (schema evolution, efficient data access)
* Logging and monitoring
* Unit and integration testing, functional tests, API contract tests, etc,
* Documentation
Please upload the code to a Git repository together with a README file explaining how the code is organized and how the requirements were implemented, including any relevant decisions in a text document. Include any relevant diagrams describing the architecture, data modeling, C4 context as you see fit for explaining the concepts.
Link the Git repository to a service for continuous integration such as CircleCI and provide the link to the pipeline showing the successful execution of the unit and integration tests.

Bank Transaction Services

Summary

-	OpenAPI data modeled User for Spring Embedded Mongo (SpringMongoRestAPI.docx) CRUD  Rest APIs as development baseline
-	OpenAPI data modeled Transaction for core system functionality aka listing transaction page totals by month(Solution-TransactionPaginationRest.docx), implemented by “bank-data-admin-client” project containing REST APIs
-	EUR  as  a common base currency  (Solution-TransactionPaginationRest.docx) for debit/credit total amount computation
-	Spring Security component powered JWT web token (SpringSecurityRestAPI.docx) identity governance, implemented by “jwt-OAuth-OpenAPI” project, with authentication/authorization security on Rest API.  Extra security features include,
  * “bank-account-data-encrypt” to supplement proprietary encryption method for sensitive information 
  * “access-sec-app” (/account-security-python-client/access-sec-app.py) designed to facilitate cross domain identity security and developed from Swagger generated client code (/OpenAPI-generated-docs /bank-access-api.json)
-	Mongo NoSQL database (/data-lake/NoSql-mongo) enabling JSON serializable/de-serializable data operations on Transaction-User-Account data schema (OpenAPI-generated-docs /bank-Transaction/index.html ). Extra data streaming stability features include, 
  * MariaDB console as DB Admin client(Appendix)
  * MaxScale as NoSql clustering solution  (Appendix)
-	Global Exchange (“global-exchange” project) connected to 3rd Party – Free Currency API 
-	Kafka Spring (“Kafka-Spring” project) and MongoDB Connector Components ((/data-lake/NoSql-mongo)) 
-	Kubernetes Orchestration Scheme (/kube-deploy)
-	Bank Data Admin transaction DB logs fetching (Appendix)
-	DevOps CirclCI compatible pipeline Dev-Test-Deploy scripts (/cicd) and successfully run (Appendix)
Major Tech Stacks
-	Spring Microservices 
-	Node.js with Axios Asynchronous external API calls for Global Exchange
-	Python Restful API with built in mocking, batch inserting, easy fetching data capabilities
-	MongoDB and MariaDB, NoSql clustering and embedded database, Maria MaxScale Enterprise
-	RabbitMQ Kafka message queue exchange for topic data consumption 
-	Docker as containerization tool

Architecture Diagram

Appendix

MariaDB console as DB Admin client

 













NoSql clustering

 
 










Bank Data Admin transaction DB logs

 


























CirclCI Pipeline Run Successfully



