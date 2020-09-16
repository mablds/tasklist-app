# tasklist-app

Tasklist API created to complete the job challenge from TIVIT Labs.

This app is hosted on Heroku to test in realtime. But if you want to, you can execute locally this app. But is necessary to setup the .env file with these variables:

```
MYSQL_DEV_HOST
MYSQL_DEV_DB
MYSQL_DEV_USER
MYSQL_DEV_PORT
MYSQL_DEV_PASSWORD
MYSQL_DEV_URI

MYSQL_TEST_HOST
MYSQL_TEST_DB
MYSQL_TEST_USER
MYSQL_TEST_PORT
MYSQL_TEST_PASSWORD
MYSQL_TEST_URI

MYSQL_PROD_HOST
MYSQL_PROD_DB
MYSQL_PROD_USER
MYSQL_PROD_PORT
MYSQL_PROD_PASSWORD
MYSQL_PROD_URI
```

After this, you need to run the install script to download all the dependencies used, run migrate to config the database using sequelize and then start the application:

- npm install
- npm run migrate
- npm start

## Endpoints

The endpoints were created following the instructions of the challenge description.

<details>
<summary>GET /taskList</summary>
</details>