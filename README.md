## Synopsis

This is one project of two projects that makes up the Suspicious Activity Bot Application for Azure Commerical and Government. This particular project is the REST API that will be leveraged by either the Bot Application or any data retrieval No Code system to view and modify the records being stored. A full description of the project can be found in the following blog post: [Deploying a Suspicious Activity Bot in Azure Commercial or Azure Government](https://blogs.msdn.microsoft.com/cloud_solution_architect/2017/05/16/deploying-a-suspicious-activity-bot-in-azure-commercial-or-azure-government)

## Motivation

I built these two projects to show how easy it is to create and deploy a Bot Application in either the Azure Commerical or Azure Government regions while also showing and discussing the differences. See the blog post above for more information.

## Installation

These instruction will allow you to deploy this application directly from Github into an Azure App Service, either Web App or API App. Knowledge of Azure App Service is required:

* Create a new Azure App Service
* [Setup Continuous Deployment from Github Repo](https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-deploy?toc=%2fazure%2fapp-service-api%2ftoc.json#a-namecontinuousdeploymentadeploy-continuously-from-a-cloud-based-source-control-service)
* [Add a New Connection String setting to the App called CUSTOMCONNSTR_docdb](https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-configure?toc=%2fazure%2fapp-service-api%2ftoc.json)

## Built With

* [NodeJS](https://nodejs.org) - Development engine and application server
* [Express](https://expressjs.com/) - The web framework used
* [Mongoose](http://mongoosejs.com/) - MongoDB based ORM library
* [MongoDB](https://www.mongodb.com/) - Database system

## Code Example

This is a very simple REST API with a route for all four of the major verbs, but as there is only one data model, the options are very limited:

* GET - https://<Azure App Service Domain Name>/apis/incidents
* POST - https://<Azure App Service Domain Name>/apis/incidents
* GET - https://<Azure App Service Domain Name>/apis/incidents/:id 
* PUT - https://<Azure App Service Domain Name>/apis/incidents/:id
* DELETE - https://<Azure App Service Domain Name>/apis/incidents/:id

The id parameter being passed of the incident is the default parameter created for all MongoDB records.

## Contributors

This project is meant to be consumed and then modified on a per customer or developer basis. Please feel free to either file an Issue or perform a Pull request should you find a bug or would like to make an enhancement on your own.