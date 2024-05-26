
import {CartContainer,CartIconContainer, ItemCount} from'./cart.styles';
import { setCartOpen } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { isCartOpenSelector, cartItemsCountSelector } from '../../store/cart/cart.selectors';

const Cart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(isCartOpenSelector);
    const cartItemsCount = useSelector(cartItemsCountSelector);

    const handleCartClick = () => {
        dispatch(setCartOpen(!isCartOpen));
    }

    return (
        <CartContainer onClick={handleCartClick}>
            <CartIconContainer />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartContainer>
    )
};


export default Cart;