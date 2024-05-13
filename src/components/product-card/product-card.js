import Button, {BTN_TYPES} from '../button/button';
import {ProductCardContainer, Image, Footer, ProductName, ProductPrice} from './product-card.styles';

import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const ProductCard = ({product}) => {
   const {name, price, imageUrl} = product;

   const {addToCartHelper} = useContext(CartContext);
   
   const handleClick = () => {
          addToCartHelper(product);
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