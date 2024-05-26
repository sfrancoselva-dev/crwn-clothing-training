export const isCartOpenSelector = state => state.cart.isCartOpen;

export const cartListSelector = state => state.cart.cartList;

export const cartItemsCountSelector = state => state.cart.totalCartItems;

export const overallTotalPriceSelector = state => state.cart.overallTotalPrice;