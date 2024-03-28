# Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
An application designed to facilitate task management, allowing users to add, modify, delete, or mark tasks as completed.

## Technologies
Frontend:<br/>
* React v18.2.0
* React Router Dom v6.21.1
* Mantine v7.4.0
* Tailwindcss v3.4.1
* Universal-cookie v7.0.1

 Backend:
 * NestJS v10.0.0
 * Prisma v5.8.0
 * Argon2 v0.31.2
 * Cookie-parser v1.4.6

## Setup
In order to run the application you have to start frontend and backend.

Use commands below to navigate and start frontend.
```
$ cd frontend
$ npm install
$ npm run start
```
Then you need to start backend.

```
$ cd backend
```

Now you should update .env file.
```
DATABASE_URL="file:./database.db"
JWT_KEY="XXXXXXXXXXX"
```

After updating environment variables you can actually start the backend.

```
$ npm install
$ npm run prisma:generate
$ npx prisma migrate dev --schema .\prisma\schemaMysql.prisma
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

