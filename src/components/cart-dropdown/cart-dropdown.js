import {CartDropdownContainer, CartListContainer, BtnContainer, EmptyMessage} from './cart-dropdown.styles';
import {BTN_TYPES} from '../button/button';
import CartItem from '../cart-item/cart-item';
// import { useContext } from 'react';
// import {CartContext} from '../../context/cart';

import { useSelector } from 'react-redux';
import { isCartOpenSelector, cartListSelector } from '../../store/cart/cart.selectors';

import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    // const {isCartOpen, cartList} = useContext(CartContext);

    const isCartOpen = useSelector(isCartOpenSelector);

    const cartList = useSelector(cartListSelector);

    const navigate = useNavigate();

    const navigateToCheckout = () => navigate('/checkout');

    return (
        <CartDropdownContainer className={`${isCartOpen ? ' open': ''}`}>
            <CartListContainer>
            {
              cartList.length ? cartList.map(item => <CartItem key={item.id} product={item} />) : <EmptyMessage>Cart is Empty</EmptyMessage>
            }
            </CartListContainer>
            <BtnContainer onClick={navigateToCheckout} btnType={BTN_TYPES.base}>GO TO CHECKOUT</BtnContainer>
        </CartDropdownContainer>
    )
};

export default CartDropdown;