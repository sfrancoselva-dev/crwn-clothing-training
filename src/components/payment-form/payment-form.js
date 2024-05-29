import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button";
import {BTN_TYPES} from '../button/button';
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";



const PaymentForm = () => {
    const stripe = useStripe(),
          elements = useElements()

    const onSubmitForm = async (e) => {

        e.preventDefault();

        if(!stripe || !elements)
            return;

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({amount:10000})
        }).then(res => res.json())

        if(response) {

            const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'Yihua Zhang',
              },
            },
          });
    
      
          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!');
            }
          }
        };
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={onSubmitForm}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button btnType={BTN_TYPES.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )

};


export default PaymentForm;