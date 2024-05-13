
import { useContext } from "react";
import { CartContext } from "../../context/cart";

import CheckoutItem from "../../components/checkout-item/checkout-item";


import {CheckoutContainer, CheckoutHeader,HeaderBlock,Total} from './checkout.styles';

const Checkout = () => {
    const {cartList,overallTotalPrice} = useContext(CartContext);
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
    </CheckoutContainer>
}


export default Checkout;