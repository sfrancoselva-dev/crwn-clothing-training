import {CartItemContainer, ItemDetails, CartItemImg, CartItemName} from './cart-item.styles';

const CartItem = ({product}) => {
    const {name, price, imageUrl,quantity} = product;
    return (
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt={name}/>
            <ItemDetails>
                <CartItemName>{name}</CartItemName>
                <span> {quantity}x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;