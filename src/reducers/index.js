import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import menu, * as fromMenu from './menu'
import filterOptions, * as fromFilters from './filter'

export default combineReducers({
  cart,
  menu,
  filterOptions
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getItem = (state, id) => fromMenu.getItem(state.menu, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getItem(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartItems = state =>{
  console.log(getAddedIds(state));
  return getAddedIds(state).map(id => ({
    ...getItem(state, id),
    quantity: getQuantity(state, id)
  }))
}
