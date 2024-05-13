import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data';
import {getCategoriesAndDocuments} from '../utils/firebase';


export const ProductsContext = createContext({
    products: {},
    setProducts: () => null
});


export const ProductsProvider = ({children}) => {
   const [products, setProducts] = useState({});
   const value = {products, setProducts};

   useEffect(() => {
    const getCategoriesDocs = async () => {
        const productData = await getCategoriesAndDocuments();
        setProducts(productData);
    }

    getCategoriesDocs();
   },[])

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}