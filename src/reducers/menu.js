import { combineReducers } from 'redux'
import { RECEIVE_MENU, ADD_TO_CART } from '../constants/ActionTypes'

const menu = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MENU:
      return {
        ...state,
        ...action.menu.reduce((obj, item,i) => {
          console.log(obj, item)
          obj[i] = item
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: menu(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MENU:
      return action.menu.map(item => item.menu_item_id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getItem = (state, id) =>{
  console.log(state,id)
  state.byId[id]
}

export const getVisibleMenu = state =>
  state.visibleIds.map(id => getItem(state, id))
