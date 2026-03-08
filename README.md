## Project Structure

### `package.json`
The `package.json` file contains important information about the application, including the project metadata, scripts used to run the application, and the dependencies required for the project to work properly.

### `src/`
The `src` folder contains the main source code of the application. All API-related code will be placed inside this directory. It helps organize the project's files and folders in a clean and maintainable structure.

### `server.js`
The `server.js` file serves as the **entry point** of the Node.js API. It is responsible for starting the server and initializing the application.

### API Endpoints
API endpoints are specific URLs on the server that allow clients to interact with the application. These endpoints handle requests and return responses for different operations such as retrieving, creating, updating, or deleting data.

### To Install Prisma
Use npx prisma init
npm install prisma --save-dev
npm i @prisma/client

### Database Migrations
Created the User, Movie and WatchList tables in the database
to define the relationship with many type of relationship just add field eg movie Movie[]
or for the child table ad field eg user User @relation(fields:[userId], references:[id], onDelete: Cascade) in this case it references the userId field in this child table ie watchList table