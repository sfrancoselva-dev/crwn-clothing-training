
import {CartContainer,CartIconContainer, ItemCount} from'./cart.styles';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const Cart = () => {
    const {isCartOpen, setCartOpen,totalCartItems} = useContext(CartContext);

    const handleCartClick = () => {
        setCartOpen(!isCartOpen);
    }

    return (
        <CartContainer onClick={handleCartClick}>
            <CartIconContainer />
            <ItemCount>{totalCartItems}</ItemCount>
        </CartContainer>
    )
};


export default Cart;