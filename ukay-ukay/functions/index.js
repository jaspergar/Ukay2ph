const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
// const { response, request } = require('express');
const stripe = require('stripe')('sk_test_51HsSRdBO46BhwTv7rFOFB8JYmcdA9WA3l53WghK5XjvDtUrwPNZX1HLwt9hOrfsyNftvSZ53CWtpJqthzgeXbwrk000TD7Ktiq')


// API

// - APP CONFIG
    const app = express();
// - MIDDLEWARES
     app.use(cors({origin: true}))
     app.use(express.json())
// - API ROUTES
     app.get('/',(request,response) => response.status(200).send('hello world'))

     app.post('/payments/create',async (request,response) => {
        const total = request.query.total;
        
        console.log('Payment Request Recieved for this amount >>>', total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount:total,
            currency: "php",
        })


        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
     })

// - LISTEN COMMAND
     exports.api = functions.https.onRequest(app)

    //example endpoint
     //http://localhost:5001/ukay-58a99/us-central1/api
