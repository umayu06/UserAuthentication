# UserAuthentication
## 📘 Description

User authentication using JWToken built using NodeJS and mongoDB

## Table of Contents

- [🏃‍♂️ Getting Started](#-getting-started)
  * [👨🏻‍🏫  Prerequisites](#--prerequisites)
  * [🔧 How to Install](#--how-to-install)
- [Built With ❤️](#-built-with)



## 🏃‍♂️ Getting Started


### 👨🏻‍🏫  Prerequisites

1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Download and install [MongoDB](https://www.mongodb.com/try/download/community)


### 🔧 How to Install

1.👯 Clone the Repository:
```sh
$ git clone https://github.com/umayu06/UserAuthentication.git
```

2. Then move to the working directory.
```sh
$ cd UserAuthentication
```

3. Setup the project
```sh
$ npm install 
```

4. Run authentication system ✨
```sh
$ npm run start
```
5.Test using [postman](https://www.postman.com/downloads/)   
  baseURL: http://localhost:5001/
  * To add user -> 
   POST: '/user/add'    
      
      ```
      {
        name: name,
        age: age,
        country: country,
        email: email,
        password: password
      }
      ```
  * To login and obtain token and id -> 
   POST: '/login'
   
      ```
      {
        email: email,
        password: password
      }
      ```
      
  * Get user details -> 
   GET: '/user/details/{{id}}'
   
  * Delete user -> 
   DELETE: '/user/details/{{id}}'

           

## Built With ❤️ 

* [Express.js](https://expressjs.com/) - Express is a node js web application framework
* [mongoose](https://mongoosejs.com/docs/documents.html) - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 
