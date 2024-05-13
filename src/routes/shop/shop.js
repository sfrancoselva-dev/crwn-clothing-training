
import ProductsPreview from "../../components/products-preview/products-preview";
import {Routes, Route} from 'react-router-dom';
import ProductList from "../product-list/product-list";

const Shop = () => (
      <Routes>
          <Route index element={<ProductsPreview />}/>
          <Route path=':productParam' element={<ProductList />}/>
    </Routes>

    )

export default Shop;