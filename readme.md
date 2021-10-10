# Create-Express-MVT
This is a boiler-plate creator for expressJS in an MVT format.
Each Router-domain has its own Model,View & Routes.
## Pros:
* As each Router Domain has its own work-folder, the domains can be re-used in other products by simply picking and droping into new project files.

![](https://i.ibb.co/rMzdqRP/2021-10-10-02-07-37.png)
So Basically if I have a project1 and have 3 app/router-domains in it(as displayed in the image above). I also have another project, Project2 which rquires app1 in it.

![](https://i.ibb.co/kQ9jFbj/2021-10-10-02-08-15.png)

It would be very easy, as all the domains work independently and are coded independently, I would simply copy it to project2 and register it in router.JS

![](https://i.ibb.co/RQPgWrZ/2021-10-10-02-08-40.png)

<!-- <img src="https://i.ibb.co/rMzdqRP/2021-10-10-02-07-37.png" alt="2021-10-10-02-07-37" border="0">
<img src="https://i.ibb.co/kQ9jFbj/2021-10-10-02-08-15.png" alt="2021-10-10-02-08-15" border="0">
<img src="https://i.ibb.co/RQPgWrZ/2021-10-10-02-08-40.png" alt="2021-10-10-02-08-40" border="0"> -->
## Installation

```Bash
npm install -g create-express-mvt
```
Then go to the folder you want to create your express app


```Bash
npx create-express-mvt
```
Create .env file

Define
```
DB_HOST=`Your MongoDB cluster link without enverted commas`
PORT=`PORT Number without inverted commas`
```

## Creating new apps/router-domains

**Only use it from inside the CEM project-workspace**
```Bash
npx create-express-mvt APP_NAME
```
# How it works

The index.js is the main file. It controls the basic defintions and middlewares,etc. Each router-domain known as an `App` has its own model,view and routes.

What happens in an `App`:

* The model is created in model.js
* The model is then imported to views.js, where views/functions are coded using the imported data-models. Each function which is to be called upon a route is imported independently using `module.exports.FUNCTION_NAME=FUNCTION_NAME`
* Then the views are imported in route.js and are connected to needed routes. The router is then exported.
* The main.js in imports routes which is then exported for Global routes.js. The routes.js all the routes registered in it JSON object. See the routes.js for understadning how to import your `App`.
# Future/Contribution Issues to be:
* Admin Panel
* JWT Auth Default-App
