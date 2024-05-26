import { createSelector } from "reselect";

const productsReducer = state => state.products;

const memoizedProductsList = createSelector([productsReducer], (productsList) => productsList.products);


export const productsSelector = (
  createSelector([memoizedProductsList], (products) => {
      return products.reduce((acc, product) => {
        const {title, items} = product;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
    })
  )

  export const selectLoading = (
    createSelector([productsReducer],
    (productsList) => productsList.loading 
  ));

