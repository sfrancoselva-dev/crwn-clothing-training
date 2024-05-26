
import { useSelector } from "react-redux";
import { productsSelector, selectLoading } from "../../store/products/products.selector";
import { useParams } from "react-router-dom";
import ProductCard from '../../components/product-card/product-card';

import {ProductListContainer, Preview} from './product-list.styles';
import { Spinner } from "../../components/spinner/spinner";

const ProductList = () => {

    const {productParam} = useParams();
    const products = useSelector(productsSelector);   
    const category = products[productParam];
    const loading = useSelector(selectLoading);

    return (
        <ProductListContainer>
            <h2>{productParam}</h2>
            {
                loading ? <Spinner /> : (
                    <Preview>
                    {
                        category && category.map(productItem => {
                            return <ProductCard product={productItem} key={productItem.id}/>
                        })
                    }
                    </Preview>
                )
            }
            
        </ProductListContainer>
    )
};

export default ProductList;