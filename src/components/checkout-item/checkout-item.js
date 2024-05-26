
import { removeProductFromCart, incrementProductQty, decrementProductQty } from '../../store/cart/cart.action';
import { cartListSelector } from '../../store/cart/cart.selectors';
import {CheckoutItemContainer, ImageContainer, Image, RemoveButton, ProductName, ProductQuantity, TotalPrice, Arrow, QuantityValue} from './checkout-item.styles';
import { useDispatch, useSelector } from 'react-redux';


const CheckoutItem = ({product}) => {
    const dispatch = useDispatch();
    const cartList = useSelector(cartListSelector);

    const {imageUrl, name, quantity, price, id, totalPrice} = product;

    const decrementQty = () => {
        dispatch(decrementProductQty(product, cartList));
    }

    const incrementQty = () => {
        dispatch(incrementProductQty(product, cartList));
    }

    const removeProductInCart = () => {
        dispatch(removeProductFromCart(id, cartList))
    }


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name}/>
            </ImageContainer>

            <ProductName>{name}</ProductName>
            <ProductQuantity>
                <Arrow onClick={decrementQty}>&#10094;</Arrow>
                <QuantityValue>{quantity}</QuantityValue>
                <Arrow onClick={incrementQty}>&#10095;</Arrow>
            </ProductQuantity>
            <TotalPrice>{totalPrice}</TotalPrice>

            <RemoveButton onClick={removeProductInCart}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;