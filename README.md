# tasklist-app

Tasklist API created to complete the job challenge from TIVIT Labs. Main technologies used to build this app:

- Node.js
- Express
- Sequelize
- Mysql (Clever Cloud free DBs)
- Winston / Morgan
- Jest
- Docker

Necessary to setup the .env file with these variables:

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
<summary>taskList/ - Click to see more</summary>

### HTTP Communications available:
|Methods|Routes|Action|Response expected|Status Code|
|:----------:|:-----:|:---:|:-----:|:----:|
|GET|taskList/|Select all the taskLists active on DB|taskList array|200|
|GET|taskList/:id|Select one taskLists active on DB|taskList object|200|
|POST|taskList/|Create a TaskList in DB|taskList object created| 201|
|PUT|taskList/:id|Update informations of a TaskList|Successfull message|200|
|DELETE|taskList/:id|Delete a TaskList|Successfull message|200|

## GET taskList/

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

## GET taskList/:id

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

## POST taskList/
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

## PUT taskList/:id
Update informations of a TaskList.

- Request expected:
Params: Valid UUID.
Body: Able to change only the name or active status of tag.

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

## DELETE taskList/:id
Delete a TaskList.

- Request expected:
Request Params: Valid UUID.

- Reponse expected:
```
{
    "status": 200,
    "msg": "TaskList deleted successfully!"
}
```
</details>

<details>
<summary>tags/ - Click to see more</summary>

### HTTP Communications available:
|Methods|Routes|Action|Response expected|Status Code|
|:----------:|:-----:|:---:|:-----:|:----:|
|GET|tags/|Select all the tags active on DB|tags array|200|
|PUT|tags/:id|Update informations of a tag|Successfull message|200|
|DELETE|tags/:id|Delete a tag|Successfull message|200|

## GET tags/
Select all the tags active on BD.

- Request expected:

No extra information needed.

- Response expected:
```
{
    "status": 200,
    "tags": [
        {
            "id": "2191eb89-9fd1-48e5-8754-cb7f708eb651",
            "name": "Cloud",
            "count": 2,
            "active": true,
            "createdAt": "2020-09-16T03:02:49.000Z",
            "updatedAt": "2020-09-16T03:03:06.000Z"
        },
        {
            "id": "33a4c88f-d2f4-415f-9955-8954720d90f7",
            "name": "Java",
            "count": 2,
            "active": true,
            "createdAt": "2020-09-16T03:02:49.000Z",
            "updatedAt": "2020-09-16T03:03:06.000Z"
        },
        {
            "id": "44773cd9-1e7b-4f2e-a843-2ed852d47261",
            "name": "React",
            "count": 2,
            "active": true,
            "createdAt": "2020-09-16T03:02:49.000Z",
            "updatedAt": "2020-09-16T03:03:05.000Z"
        }
    ]
}
```

## PUT tags/:id
Update informations of a tag.

- Request expected:

Params: Valid UUID.
Body: Able to change only the name or active status of tag.
```
{
    "name": "Node.js"
}
```

- Response expected:
```
{
    "status": 200,
    "msg": "Tag updated successfully!"
}
```


## DELETE tags/:id
Delete a Tag.

- Request expected:

Params: Valid UUID.

- Reponse expected:
```
{
    "status": 200,
    "msg": "Tag removed successfully!"
}
```

</details>

<details>
<summary>tasks/ - Click to see more</summary>

### HTTP Communications available:
|Methods|Routes|Action|Response expected|Status Code|
|:----------:|:-----:|:---:|:-----:|:----:|
|GET|tasks/|Select all the tasks active from an active TaskList on DB|tasks array|200|
|POST|tasks/|Create a task in DB|task object created| 201|
|PUT|tasks/:id|Update informations of a task|Successfull message|200|
|DELETE|tasks/:id|Delete a task|Successfull message|200|

## GET tasks/
Select all the tasks active from an active TaskList on DB

- Request expected:

Querystring: Valid UUID.
```
Example: tasks/?id=4d82fdc6-bafa-4750-b7da-59f5658a1ecf
```

- Reponse expected:
```
{
    "status": 200,
    "task": [
        {
            "id": "1dc78e2c-79b5-402c-b445-dea433fd86f8",
            "title": "DSW - Fabio Tsuda",
            "notes": "",
            "priority": 3,
            "remind_me_on": "2020-11-07T08:03:22.000Z",
            "activity_type": "indoors",
            "status": "open",
            "task_list": "4d82fdc6-bafa-4750-b7da-59f5658a1ecf",
            "active": true,
            "createdAt": "2020-09-16T03:02:48.000Z",
            "updatedAt": "2020-09-16T03:02:48.000Z"
        },
        {
            "id": "2ac4294a-c956-45bc-8d15-7783cb895d00",
            "title": "ecommerce",
            "notes": "",
            "priority": 3,
            "remind_me_on": "2020-11-07T08:03:22.000Z",
            "activity_type": "indoors",
            "status": "open",
            "task_list": "4d82fdc6-bafa-4750-b7da-59f5658a1ecf",
            "active": true,
            "createdAt": "2020-09-16T03:03:04.000Z",
            "updatedAt": "2020-09-16T03:03:04.000Z"
        }
    ]
}
```


## POST tasks/:id
Create a task in DB.

- Request expected:


Body:
- title: Necessary
- status: Necessary
- tags: Necessary
- task_list: Necessary

```
{
    "title": "ecommerce",
    "status": "open",
    "tags": ["React", "Java", "Cloud"],
    "task_list": "4d82fdc6-bafa-4750-b7da-59f5658a1ecf",
    "notes": "",
    "activity_type": "indoors",
    "priority": 3,
    "remind_me_on": "2020-11-07 05:03:22"
}
```

- Reponse expected:
```
{
    "status": 201,
    "msg": "Task created!",
    "task": {
        "id": "9aa88f3d-2a2d-4864-b2ed-aa160bc79303",
        "title": "Subir no Blackboard",
        "status": "open",
        "task_list": "4d82fdc6-bafa-4750-b7da-59f5658a1ecf",
        "notes": null,
        "priority": 3,
        "remind_me_on": "2020-11-07T08:03:22.000Z",
        "activity_type": "indoors",
        "active": true,
        "updatedAt": "2020-09-16T19:21:33.412Z",
        "createdAt": "2020-09-16T19:21:33.412Z"
    }
}
```

## PUT tasks/:id
Update informations of a task.

- Request expected:

Params: Valid UUID.
Body: Any information to change on the task.

- Reponse expected:
```
{
    "status": 200,
    "msg": "Task updated successfully!"
}
```

## DELETE tasks/:id
Delete a Task.

- Request expected:

Params: Valid UUID.

- Reponse expected:
```
{
    "status": 200,
    "msg": "Task removed successfully!"
}
```

</details>




## Middlewares

Theres an UUID Validate Middleware to all requests sent using UUID as Params. If the UUID informed isnt valid, it rejects the request, and returns status 400.

It also log the attempt as a Warn level.

## Logs

All the logs are stored in a file on logs/. The logger module were created using Winston and Morgan. Winston do all the work to write the stdout in the file with the correct level. And Morgan uses Winston to store all the logs generated in the requests as a express middleware.

## Tests

All the tests were created using Jest and Supertest. To run the unit and integration tests, execute the following command:

```
npm run test
```

All the coverage will be displayed on console, and on the files generated on the root project folder coverage/.


## Points to improve

Along the development process, these are the main points to improve in the future:

- [ ] Implement transactions to all Sequelize functions.
- [ ] Improve tests coverage 
- [ ] Refactor DAOs to single CRUD functions.
