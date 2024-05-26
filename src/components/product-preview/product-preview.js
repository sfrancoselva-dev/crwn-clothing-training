import ProductCard from "../product-card/product-card";
import {ProductPreviewContainer, Title, Preview} from './product-preview.styles';
import {Link} from 'react-router-dom';

const ProductPreview = ({title, product}) => {

    return (
        <ProductPreviewContainer>
                    <Title>
                      <Link to={title}>{title}</Link>
                      </Title>
                    <Preview>
                      {
                        product.filter((_,index) => index < 4)
                                        .map(product => <ProductCard key={product.id} product={product}/> )
                      }
                  
                    </Preview>
                </ProductPreviewContainer>
    )
}

export default ProductPreview;