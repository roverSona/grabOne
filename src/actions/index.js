import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveMenu = menu => ({
  type: types.RECEIVE_MENU,
  menu
})

export const getAllMenu = (category) => (dispatch) => {
  shop.getMenu(menu => {
    if(category) {
      menu = menu.filter((item) => item.category === category);
    }
    dispatch(receiveMenu(menu))
  })
}

const addToCartUnsafe = itemId => ({
  type: types.ADD_TO_CART,
  itemId
})

export const addToCart = itemId => (dispatch, getState) => {
  //if (getState().menu.byId[itemId].inventory > 0) {
    dispatch(addToCartUnsafe(itemId))
  //}
}

export const checkout = items => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyFood(items, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}

const receiveFilters = filterOptions => ({
  type: types.RECEIVE_FILTERS,
  filterOptions
})

export const getAllFilters = () => (dispatch) => {
  shop.getFilters(filterOptions => {
    console.log(filterOptions);
    dispatch(receiveFilters(filterOptions))
  })
}

export const searchMenu = (SearchString) => (dispatch) => {
  shop.getMenu(menu => {
    if(SearchString) {
      SearchString = SearchString.toLowerCase();
      menu = menu.filter((item) => {
        return ( item.category.toLowerCase().includes(SearchString) || item.name.toLowerCase().includes(SearchString) || item.description.toLowerCase().includes(SearchString) )
      });
      dispatch(receiveMenu(menu))
    }
    
  })
}

