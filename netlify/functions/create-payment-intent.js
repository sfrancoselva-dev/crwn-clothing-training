// require("dotenv").config();

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (event) => {
//     const {amount} = JSON.parse(event.body);

//     try {
//        const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: 'usd',
//             payment_method_types: ["card"]
//         });

//         if(paymentIntent) {
//             return {
//                 statusCode: 200,
//                 body: JSON.stringify({paymentIntent})
//             }
//         }

//     }
//     catch(error) {
//         return {
//             statusCode: 400,
//             body: JSON.stringify({error})
//         }
//     }
// }


require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};