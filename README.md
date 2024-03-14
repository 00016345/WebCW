# Todo List Web Application

## About the App:
# My application is for managing students in event to write students' name and surname, built using Node.js and Express.js. Application create, update, and delete students with the help of user interface(by EJS)

## Run application:
1. Clone it from github:   git clone   https://github.com/00016345/WebCW.git
2. Enter to the project directory    
3. Install dependencies:  npm install
4. Start the server:   npm run start(:dev for dev mode)
5. Open  web browser and go to http://localhost:3000/wuit/fruit

## Application Dependencies:
The application depends on the following components:

- Express: utilized for constructing the server-side application.
- EJS: employed for dynamically rendering content in HTML.
- JOI: utilized for validation purposes.
- DOTENV: employed for storing constants and can easily be hidden using .gitignore.
- CORS: utilized for enabling the frontend part of the application to run smoothly.

# Install dependencies: npm install express ejs cors dotenv joi body-parser

## Links:
- [Public Repo on GitHub](https://github.com/00016345/WebCW.git)



### Structure
# config/app.config.js: -> script manages the extraction of the port number from the .env file.

# controller/controller.js: -> defines various controller functions to manage HTTP requests associated with students.

# db -> model/students.json: This section consists of an array used to interact with the data stored in students.json.

# public: -> static files (such as CSS and JavaScript) for EJS views.

# routing route/routes.js: -> Establishes the routes for the application

# schema -> schema/creator.schema.js: Contains Joi schemas for validating task creation requests.

# additional helpers -> utils contains auxiliary functions for reading and writing data.

# UI -> views: view template (students.ejs) for rendering the student list interface.

# main.js: This file contains JavaScript code that enhances the functionality of the entire server.