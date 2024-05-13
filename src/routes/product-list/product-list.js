
import {ProductsContext} from '../../context/products';
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductCard from '../../components/product-card/product-card';

import {ProductListContainer, Preview} from './product-list.styles';

const ProductList = () => {

    const {productParam} = useParams();

    const {products} = useContext(ProductsContext);

    const [productState, setProductState] = useState(products[productParam]);

    useEffect(() => {
        setProductState(products[productParam]);
    },[productParam, products]);

        

    return (
        <ProductListContainer>
            <h2>{productParam}</h2>
            <Preview>
            {
                productState && productState.map(productItem => {
                    return <ProductCard product={productItem} key={productItem.id}/>
                })
            }
            </Preview>
        </ProductListContainer>
    )
};

export default ProductList;