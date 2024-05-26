import ProductPreview from "../product-preview/product-preview";
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/products/products.selector";
import { Spinner } from "../spinner/spinner";
import { selectLoading } from "../../store/products/products.selector";

const ProductsPreview = () => {
    const products = useSelector(productsSelector);
    const loading = useSelector(selectLoading);
    return (
        <div className="products-preview-container">
        {
            loading ? <Spinner /> : (Object.keys(products).map(title => {
                const product = products[title];
                return <ProductPreview key={title} title={title} product={product}/>
            }))
        }
        </div>
    )
}

export default ProductsPreview;