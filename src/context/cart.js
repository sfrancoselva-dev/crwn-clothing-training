import { createContext, useState, useEffect} from "react";

export const CartContext = createContext({
    isCartOpen: null,
    setCartOpen: () => {},
    cartList: [],
    addToCartHelper: () => {},
    totalCartItems: 0,
    removeProductFromCart: () => {},
    overallTotalPrice: null,
    incrementProductQty: () => {},
    decrementProductQty: () => {}
});


export const CartContextProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartList, setCartList] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [overallTotalPrice, setOverallTotalPrice] = useState(0);
    
    const addToCartHelper = (product) => {
        const {id} = product;
        
        const cartItem = cartList.find(cartItem => cartItem.id === id);
        if(cartItem) {
            cartItem.quantity = cartItem.quantity + 1; 
            cartItem.totalPrice = cartItem.quantity * cartItem.price;
            setCartList([...cartList]);
        }
        else {
            setCartList([...cartList, {...product, quantity: 1,totalPrice: product.price}]);
        }
    }


    const incrementProductQty = (product) => {
        addToCartHelper(product);
    }

    const decrementProductQty = (product) => {
        const {id} = product;
        const cartListCopy = [...cartList];
        const cartItem = cartListCopy.find(cartItem => cartItem.id === id);
        cartItem.quantity--; 

        if(cartItem.quantity === 0) 
            removeProductFromCart(id);
        else {
            cartItem.totalPrice = cartItem.price * cartItem.quantity;
            setCartList([...cartListCopy], {...cartItem});
        }
    }



    const removeProductFromCart = (productId) => {
        const cartListCopy = [...cartList];
        const index = cartListCopy.findIndex(item => item.id === productId);
        index >= 0 && cartListCopy.splice(index,1);
        setCartList([...cartListCopy]);
    }


   useEffect(() => {
        const totalQuantity = cartList.reduce((acc, item) => item.quantity + acc, 0);
        const overAllPrice = cartList.reduce((acc, item) => item.totalPrice + acc , 0);
        setTotalCartItems(totalQuantity);
        setOverallTotalPrice(overAllPrice);
   }, [cartList]);



    const value = {isCartOpen, setCartOpen,cartList, setCartList, addToCartHelper, totalCartItems, removeProductFromCart, overallTotalPrice,incrementProductQty,decrementProductQty}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}