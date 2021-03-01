# To Do List

To Do List is an application that can list, add or delete your tasks. 

## Tools

This project was generated with [Angular CLI] version 11.2.1.
Angular Material was used for creating a button and checkbox in the table while I use mocked Json file for the backend provider. 
Moreover, this project support GET/POST/DELETE/PUT requests. 

## Preparation 

For using some tools inside of Angular CLI, I had to the highest version of Node. Therefore, firstly I had to upgrade my node so I installed the latest version of Node: 14.16.0 (includes npm 6.14.11). Later, I can installed ANGULAR CLI(version 11.2.1.).

`npm install -g @angular/cli` <br />
`ng new todolist-angular` <br />
`cd my-dream-app` <br />
`code .` <br />
`ng serve` <br />

I started with creating an HTML page and using Angular Material. For Angular Material, I created a " material/material.module.ts " file for importing necessary tools.
Step1: ng add @angular/material
Step2: import tools inside material/material.module.ts file and lastly import material.module.ts to app.module.ts

For the design of the HTML file, I used SCSS and I tried responsive design.( I'm a not good but I'm improving myself in this field day by day.) 

Before creating the mock backend, for checking my code I created a model.ts file and added some TodoItems. Then I had the chance to control the data and the use of the buttons by linking the model.ts file to the HTML file.

Configuration of Mock API: 

For using mack api, I should have JSON file for keeping my data. Therefore, I follow tutorial that I shared link below. 

Step 1: `npm install -g json-server` <br />
Step 2: Add a Json file with mock data. <br />
Step 3: Create a route mapping file. (`api/routes.json`) <br />
Step 4: Add ` "api": "json-server api/db.json --routes api/routes.json --no-cors=true" ` to package.json file. <br />
Step 5: Starting mock api run `npm run api` in terminal. / The other option is `json-server --watch db.json`. (Access to data from browser (`http://localhost:3000/todoitems`)). <br />
Step 6: Set up the HttpClientModule in `app.module.ts`. <br />
Step 7: Before the start GET/POST/PUT/DELETE request in code. To see if I have done the installation correctly, I checked it in postman.<br />
Finally, I added required request functions in `app.component` file and after integrated it with `app.component.html file`, it worked. 

## Json server 

After you clone or take this code to your local, firstly you should install npm in the terminal with an `npm install` statement. 
After that, for checking the mock back end part, you should write `npm run api` in the terminal. At the same time, you should run `ng serve --open`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Resources

Node: https://nodejs.org/en/download/ <br />
Angular & TypeScript : https://www.youtube.com/watch?v=k5E2AVpwsko<br />
Angular CLI: https://cli.angular.io/<br />
Angular Material: https://material.angular.io/, for button https://material.angular.io/components/button/overview <br />
Json Server Blog Post: https://blog.angulartraining.com/fake-your-angular-backend-until-you-make-it-8d145f713e14 <br />
Json Server Github: https://github.com/typicode/json-server

## Blog

Here is my blog about the project. https://ceydaulubas.medium.com/todo-list-in-angular-cli-1d3ef2b0ea2a

