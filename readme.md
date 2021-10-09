# CREATE-EXPRESS-MVT
This is a boiler-plate creator for expressJS in an MVT format.
Each Router-domain has its own Model,View & Routes.
## Pros:
* As each Router Domain has its own work-folder, the domains can be re-used in other products by simply picking and droping into new project files.

![](2021-10-10-02-07-37.png)
So Basically if I have a project1 and have 3 app/router-domains in it(as displayed in the image above). I also have another project, Proekct2 which rquires app1 in it.

![](2021-10-10-02-08-15.png)

It would be very easy, as all the domains work independently and are coded independently, I would simply copy it to project2 and register it in router.JS

![](2021-10-10-02-08-40.png)

## Installation

```Bash
npm install create-express-mvt
```
Then go to the folder you want to create your express app

Create .env file

```Bash
npx create-express-mvt
```

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

# Future/Contribution Issues to be:
* Admin Panel
* JWT Auth Default-App