import ProductPreview from "../product-preview/product-preview";
import {useContext } from "react";
import { ProductsContext } from "../../context/products";


const ProductsPreview = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className="products-preview-container">
        {
            Object.keys(products).map(title => {
                const product = products[title];
                return <ProductPreview key={title} title={title} product={product}/>
            })
        }
        </div>
    )
}

export default ProductsPreview;