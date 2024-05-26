require("dotenv").config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    const {amount} = JSON.parse(event.body);

    try {
       const paymentIntent = stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ["card"]
        });

        if(paymentIntent) {
            return {
                statusCode: 200,
                body: JSON.stringify({paymentIntent})
            }
        }

    }
    catch(error) {
        return {
            statusCode: 400,
            body: JSON.stringify({error})
        }
    }
}