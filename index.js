/* import express from 'express'; */
const express = require ('express');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // to serve static files with css 
//placed under port so it renders after intializing the server

/* app.get('/', (req, res) => {

res.send('Hello World!');
}) */

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'public')));
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
    })

    app.get('/menu', (req, res) => {
        app.use(express.static(path.join(__dirname, 'public')));
        const filePath = path.resolve(__dirname, 'menu.html');
        res.sendFile(filePath);
        })

        app.get('/contact', (req, res) => {
            app.use(express.static(path.join(__dirname, 'public')));
            const filePath = path.resolve(__dirname, 'contact.html');
            res.sendFile(filePath);
           /*  res.send('Contact Page'); */
        });

        app.get('/about', (req, res) => {
            app.use(express.static(path.join(__dirname, 'public')));
            const filePath = path.resolve(__dirname, 'about.html');
            res.sendFile(filePath);
            })

            app.get('/404', (req, res) => {
                app.use(express.static(path.join(__dirname, 'public')));
                const filePath = path.resolve(__dirname, '404.html');
                res.sendFile(filePath);
                })

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});