//create the server
// const express = require('express');
import express from 'express';
//Import routes
import movieRoutes from './routes/movieRoutes.js';
const app = express();

const PORT = 5001;

//Api routes
//it defines resourse movie actions
app.use('/movies', movieRoutes);



app.listen(PORT, () => { // this callback runs when the server starts
    console.log(`Server is running on port ${PORT}`);
});











//res is the response object that we send back to the client comes from the api
//req is the request object that we receive from the client comes from the client