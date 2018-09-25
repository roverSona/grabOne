/**
 * Mocking client-server processing
 */
import _menu from './menu.json'

const TIMEOUT = 100;
let menu =  _menu.restaurant.menu

fetch("https://demo8827789.mockable.io/menulist")
  .then(res => res.json())
  .then(
    (result) => {
    	menu = result.restaurant.menu;
    }
  )

export default {
  getMenu: (cb, timeout) => setTimeout(() => cb(menu), timeout || TIMEOUT),
  buyFood: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
