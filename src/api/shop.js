/**
 * Mocking client-server processing
 */
import _menu from './menu.json';
import _filters from './filters.json';

const TIMEOUT = 100;
let menu =  _menu.menu;
fetch("http://demo9526926.mockable.io/menu")
  .then(res => res.json())
  .then(
    (result) => {
    	menu = result.menu;
    }
  )

export default {
  getMenu: (cb, timeout) => setTimeout(() => cb(menu), timeout || TIMEOUT),
  getFilters: (cb ,timeout) => setTimeout(() => cb(_filters),timeout || TIMEOUT),
  buyFood: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
