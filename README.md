# Nicely music MEAN APP

####server : Typescript
####Front : Angular 5 (with angulat material + materializecss)
####Data :  Mongodb (mongoose)



This is the Nicely Music code source by Delplace Virgile.
This application based on MEAM Template with Nh-ui-auth-2


Please refer to Satellizer's Documentation to learn how to configure and obtain oauth keys.



### Running Locally
- In terminal you need to start mongo => $mongod
- npm start // starts up the server, opens browser and starts livereload


### Directory Structure

``` javascript
|- client                               // public folder (angularjs files) CLIENT SIDE (port 4200)
|  |- e2e/                              // test folder
|  |- src/
|    |- app/
|      |- components/                   //components of applications
|      |- guards/                       //guards for authentificaiton
|      |- models/                       //class for application
|      |- services/                     //services to API 
|    |- assets/                         //assets file
|    |- environment/                    //Environment file
|  |- src/
|    |- congig/                         //config file
|    |- models/                         //Models (mongoose Schema + typescript insterface)
|    |- routes/                         //Liste of all root for api
|    |- auth.ts                         //Routes for Auth
|    |- config.ts                       //config for authentification
|    |- helpers.ts  
|    |- interfaces.ts                   //list of interfaces for Auth
|    |- server.ts                       //SERVER FIL
|    |- storage.ts                      //controllers for Auth
|- .gitignore
|- package.json

```
