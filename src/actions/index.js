import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveMenu = menu => ({
  type: types.RECEIVE_MENU,
  menu
})

export const getAllMenu = () => dispatch => {
  shop.getMenu(menu => {
    dispatch(receiveMenu(menu))
  })
}

const addToCartUnsafe = itemId => ({
  type: types.ADD_TO_CART,
  itemId
})

export const addToCart = itemId => (dispatch, getState) => {
  if (getState().menu.byId[itemId].inventory > 0) {
    dispatch(addToCartUnsafe(itemId))
  }
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
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
