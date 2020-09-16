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
<summary>taskList/</summary>

### HTTP Communications available:
|Methods|Routes|Action|Response expected|Status Code|
|:----------:|:-----:|:---:|:-----:|:----:|
|GET|taskList/|Select all the taskLists active on DB|taskList array|200|
|GET|taskList/:id|Select one taskLists active on DB|taskList object|200|
|POST|taskList/|Create a TaskList in DB|taskList object created| 201|
|PUT|taskList/:id|Update informations of a TaskList|Successfull message|200|
|DELETE|taskList/:id|Delete a TaskList|Successfull message|200|

#### GET taskList/
<details>

Select all the taskLists active on DB:

- Request expected:

No informations required. Just the request.

- Reponse expected:

```
{
    "status": 200,
    "taskLists": [
        {
            "id": "4d82fdc6-bafa-4750-b7da-59f5658a1ecf",
            "name": "Projeto Integrador - SENAC",
            "active": true,
            "createdAt": "2020-09-16T03:01:13.000Z",
            "updatedAt": "2020-09-16T03:01:13.000Z"
        },
        {
            "id": "d1875f07-5888-4965-9725-9d3e66a67d91",
            "name": "Certificações",
            "active": true,
            "createdAt": "2020-09-16T15:03:26.000Z",
            "updatedAt": "2020-09-16T15:03:26.000Z"
        }
    ]
}
```
</details>

#### GET taskList/:id
<details>

Select one taskLists active on DB

- Request expected:

Params: Valid UUID;

- Reponse expected:

```
{
    "status": 200,
    "taskList": {
        "id": "561ab6f4-ca55-455d-a72a-a041fcc76606",
        "name": "Casa",
        "active": true,
        "createdAt": "2020-09-16T16:57:52.000Z",
        "updatedAt": "2020-09-16T16:57:52.000Z"
    }
}
```

</details>

#### POST taskList/
<details>
Create a TaskList in DB.

- Request expected:
Request Body:

```
{
    "name": "Casa"
}
```

- Reponse expected:

```
{
    "status": 201,
    "msg": "TaskList created!",
    "taskList": {
        "id": "561ab6f4-ca55-455d-a72a-a041fcc76606",
        "name": "Casa",
        "active": true,
        "updatedAt": "2020-09-16T16:57:52.560Z",
        "createdAt": "2020-09-16T16:57:52.560Z"
    }
}
```
</details>

#### PUT taskList/:id
<details>
Update informations of a TaskList.

- Request expected:
Request params: Valid UUID.
Request body:

```
{
    "name": "Kung Fu"
}
```

- Reponse expected:

```
{
    "status": 200,
    "msg": "TaskList updated successfully!"
}
```
</details>

#### DELETE taskList/:id
<details>
Delete a TaskList.

- Request expected:
Request Params: Valid UUID.

- Reponse expected:
```
{
    "status": 200,
    "msg": "TaskList update successfully!"
}
```

</details>

<details>
<summary>tags/</summary>

### HTTP Communications available:
|Methods|Routes|Action|Response expected|Status Code|
|:----------:|:-----:|:---:|:-----:|:----:|
|GET|taskList/|Select all the taskLists active on DB|taskList array|200|
|GET|taskList/:id|Select one taskLists active on DB|taskList object|200|
|POST|taskList/|Create a TaskList in DB|taskList object created| 201|
|PUT|taskList/:id|Update informations of a TaskList|Successfull message|200|
|DELETE|taskList/:id|Delete a TaskList|Successfull message|200|
</details>


<details>
<summary>tasks/</summary>
</details>
