import Button, {BTN_TYPES} from '../button/button';
import {ProductCardContainer, Image, Footer, ProductName, ProductPrice} from './product-card.styles';
import {addToCartHelper} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { cartListSelector } from '../../store/cart/cart.selectors';

const ProductCard = ({product}) => {
   const {name, price, imageUrl} = product;
   const dispatch = useDispatch();
   const cartList = useSelector(cartListSelector);
   
   const handleClick = () => {
          dispatch(addToCartHelper(product, cartList));
   }

    return (
        <ProductCardContainer>
            <Image src={imageUrl} />
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button btnType={BTN_TYPES.inverted} onClick={handleClick}>ADD TO CART</Button>
        </ProductCardContainer>
    )
};


export default ProductCard;