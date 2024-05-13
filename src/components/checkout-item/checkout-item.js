
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

import {CheckoutItemContainer, ImageContainer, Image, RemoveButton, ProductName, ProductQuantity, TotalPrice, Arrow, QuantityValue} from './checkout-item.styles';

const CheckoutItem = ({product}) => {
    const {imageUrl, name, quantity, price, id, totalPrice} = product;
    const {removeProductFromCart, incrementProductQty, decrementProductQty} = useContext(CartContext);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name}/>
            </ImageContainer>

            <ProductName>{name}</ProductName>
            <ProductQuantity>
                <Arrow onClick={() => decrementProductQty(product)}>&#10094;</Arrow>
                <QuantityValue>{quantity}</QuantityValue>
                <Arrow onClick={() => incrementProductQty(product)}>&#10095;</Arrow>
            </ProductQuantity>
            <TotalPrice>{totalPrice}</TotalPrice>

            <RemoveButton onClick={() => removeProductFromCart(id)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;