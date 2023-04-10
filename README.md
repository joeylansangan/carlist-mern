# Carlist Car Collection App
This is a full stack application created with the MERN stack (MongDB, Express, React, Node). Featuring a fully mobile responsive UI styled with Material UI.

<img width="1440" alt="carlist1" src="https://user-images.githubusercontent.com/48928926/230949878-a9ed0e35-7fd7-41bb-87fa-386ab4d450e9.png">

<img width="1439" alt="carlist2" src="https://user-images.githubusercontent.com/48928926/230949904-927d3b64-af82-4fa8-a4fe-91108aa61c73.png">

<img width="1440" alt="carlist3" src="https://user-images.githubusercontent.com/48928926/230950780-bdee256c-6f97-4499-b2da-bc32714ed19b.png">

## Table of contents
1. [Technologies used](#technologies-used)
2. [Setup and Installation](#setup-and-installation)

## Technologies used

### Backend
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/mongoose)
- [helmet](https://www.npmjs.com/package/helmet/)

I created the REST API using Node.js Express and MongoDB. I separated the app into three components: Models (representing the data), Controllers (for handling user input and logic) and Views (representing the client-facing UI which is my React App).

I configured the database connection using Mongoose and defined the data model and schema. I also implemented middlewares such as body-parser, cors and helmet to parse the request body, handle CORS issues and set HTTP headers. I used morgan for an easy to implement package for quick HTTP request logging.


### Frontend
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Axios](https://www.npmjs.com/package/axios)
- [Material UI](https://mui.com/)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [yup](https://www.npmjs.com/package/yup)

I created the React app from scratch using Webpack to bundle the application's assets, includiing CSS and JavaScript files. To ensure compatibility across different browsers, I used Babel to transpile my code.

I used Axios for making API calls and fetchinig data from my backend server. For form validation, I used the react-hook-form package along with the schema validation library Yup. Success and error messages are rendered to the UI if user input does not meet the specified validation criteria.

The frontend is styled using Material UI. This allowed me to create a visually appealing and responsive user interface without having to write much CSS from scratch.



## Setup and Installation

You need to have Node on your local development machine to run this application. If you don't have it installed on your system, please head to the official [Node.js](https://nodejs.org/en/) website to download and install Node.

1. In your terminal, go to the folder where you want to save the source code and clone the repository.

2. Go to the server folder on the project directory and install the frontend dependencies by running:
```
$ npm install
```
3. After installation you can now run the API in development mode with:
```
$ npm start
```
You can use Postman to check if the API routes are working at http://localhost:9000/cars/

4. Now go to the client folder on the project directory and install the frontend dependencies by running:
```
$ npm install
```
5. After installation you can now run the React app with:
```
$ npm run dev
```
5. The UI should now be visible at [http://localhost:9000](http://localhost:9000) in the browser.
