import { createAction } from "../../utils/reducer";
import { CART_REDUCER_TYPES } from "./cart.reducer.types";

export const setCartOpen = status => createAction(CART_REDUCER_TYPES.SET_CART_OPEN, status);


const setCartList = (cartList) => {  
    const totalCartItems = cartList.reduce((acc, item) => item.quantity + acc, 0);
    const overallTotalPrice = cartList.reduce((acc, item) => item.totalPrice + acc , 0);

    const data = {
       cartList,
       totalCartItems,
       overallTotalPrice
    }
    return data;
} 

export const addToCartHelper = (product, cartList) => {
    const {id} = product;
    
    const cartItem = [...cartList].find(cartItem => cartItem.id === id);
    if(cartItem) {
        cartItem.quantity = cartItem.quantity + 1; 
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
        return createAction(CART_REDUCER_TYPES.ADD_ITEM_TO_CART, setCartList([...cartList]));
    }
    else {
        return createAction(CART_REDUCER_TYPES.ADD_ITEM_TO_CART,  setCartList([...cartList, {...product, quantity: 1,totalPrice: product.price}]));
    }
}

export const incrementProductQty = (product, cartList) => {
    return addToCartHelper(product, cartList);
}

export const decrementProductQty = (product, cartList) => {
    const {id} = product;
    const cartListCopy = [...cartList];
    const cartItem = cartListCopy.find(cartItem => cartItem.id === id);
    cartItem.quantity--; 

    if(cartItem.quantity === 0) 
        return removeProductFromCart(id, cartList);
    else {
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
        return createAction(CART_REDUCER_TYPES.ADD_ITEM_TO_CART, setCartList([...cartListCopy], {...cartItem}));
    }
}



export const removeProductFromCart = (productId, cartList) => {
    const cartListCopy = [...cartList];
    const index = cartListCopy.findIndex(item => item.id === productId);
    index >= 0 && cartListCopy.splice(index,1);
    return createAction(CART_REDUCER_TYPES.ADD_ITEM_TO_CART, setCartList([...cartListCopy]));
}