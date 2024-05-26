
import { CART_REDUCER_TYPES } from "./cart.reducer.types";

const CART_INITIAL_STATE = {
    cartList: [],
    totalCartItems: 0,
    overallTotalPrice: 0,
    isCartOpen: false
}


export const cartReducer = (state = CART_INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch(type) {

        case CART_REDUCER_TYPES.ADD_ITEM_TO_CART:
            const {cartList, overallTotalPrice, totalCartItems} = payload;
            return {
                ...state,
                cartList,
                overallTotalPrice,
                totalCartItems
            }
            break;

        case CART_REDUCER_TYPES.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
            break;    

        default:
            return state;
    
    }
}


