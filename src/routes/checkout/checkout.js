
import { useSelector } from "react-redux";
import {cartListSelector, overallTotalPriceSelector} from '../../store/cart/cart.selectors';

import CheckoutItem from "../../components/checkout-item/checkout-item";
import PaymentForm from "../../components/payment-form/payment-form";


import {CheckoutContainer, CheckoutHeader,HeaderBlock,Total} from './checkout.styles';

const Checkout = () => {
    const cartList = useSelector(cartListSelector);
    const overallTotalPrice = useSelector(overallTotalPriceSelector);

    return <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <h3>Product</h3>    
                </HeaderBlock>
                <HeaderBlock>
                    <h3>Description</h3>
                </HeaderBlock>
                <HeaderBlock>
                    <h3>Quantity</h3>
                </HeaderBlock>
                <HeaderBlock>
                    <h3>Price</h3>
                </HeaderBlock>
                <HeaderBlock>
                    <h3>Remove</h3>
                </HeaderBlock>
            </CheckoutHeader>
            {
            cartList.map(item => {
                return (
                    <CheckoutItem key={item.id} product={item}/>
                )
            })
        }
        <Total>Total: ${overallTotalPrice}</Total>

        <PaymentForm />
    </CheckoutContainer>
}


export default Checkout;