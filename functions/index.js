const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HUiw8H19v8JUE6zRzzRUZxPTSNBTNFrbpJOLcSEHNkJ7PZ1hfuqbHJfqySiwNMo6wVCu78sfGOCbKHvm3slg9lY008yl49iTO')

// API setup //

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// emulator
// >firebase emulators:start
// to find the below links, scroll up in the terminal after running the above.
// active log tab at: http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22
// an example end point: http://localhost:5001/clone-31550/us-central1/api

// - API Routes - end point - Get request
app.get('/', (request, response) => response.status(200).send('hello world')); // a dummy test route for now.

// an example end point: http://localhost:5001/clone-31550/us-central1/api/test2
app.get('/test2', (request, response) => response.status(200).send('TEST2'));

app.post('/payments/create', async (request, response) => {
    // get query info.
    const total = request.query.total; // amount in subunits

    // Test
    console.log("Payment Request Received!! for this amount : ", total);

    //
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // amount in subunits
        currency: "usd",
    });


    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
    ////
})

// - Listen command
exports.api = functions.https.onRequest(app);