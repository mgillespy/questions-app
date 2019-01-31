# Questions & Answers

Q&A is a simple app that demonstrates use of the full MEAN stack to allow users to submit questions, answer questions, and vote on answers.

## Walkthrough

Video demonstration of this app: https://youtu.be/763TsxDL5Sc

## Installation

This project uses:

**Node.js**: https://nodejs.org/en/download/

**MongoDB**: https://www.mongodb.com/download-center/community
```
// within C:/ 
$ mkdir data
// within data directory
$ mkdir db
$ cd c:/"Program Files"/MongoDB/Server/<version_number>/bin/
// run MongoDB server
$ ./mongod    
```
**MongoDB** terminal
Keep the MongoDB server running and open a new CLI instance to run the following:
```
$ cd c:/"Program Files"/MongoDB/Server/<version_number>/bin/
$ mongo.exe  
```

**Express, Mongoose**:
Build app, install middleware, libraries, etc:
```
$ mkdir questions_answers
// within questions_answers directory, set up Angular front-end (name 'public' whatever you want)
$ ng new public 
// inside public directory, run ng g c *component name* to build components, ng g s *service name* to build services, ng g c *class name* to build classes. Set up routes and imports as necessary.
// in question_answers directory, install Express, middleware, libraries, etc:
$ npm init -y 
$ npm install express --save
$ npm install ejs --save
$ npm install body-parser --save
$ npm install mongoose --save
```

