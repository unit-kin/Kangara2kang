const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const { response, request } = require("express");
const stripe = require ('stripe')('sk_test_51LjgXCLWwrjEyOhr7v0WS21omVIlnerTCBMprBiMhfFnJOhWT7mtWj9rBlGyusSlvlDkiNPLQkxB2FOdgpaVYERK00Aczxtdky')


/* API */
/* APP CONFIG */
const app =express();

/* MIDDLEWARES */

app.use(cors({origin:true}));
app.use(express.json());

/* API ROUTES */

app.get('/', (request,response) => response.status(200).send('hello world!'))
app.post('/payments/create', async (request, response) =>{
    const total= request.query.total;

    console.log('Payment Request Recieved >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
/* LISTEN COMMAND */

exports.api = functions.https.onRequest(app)