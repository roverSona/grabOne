import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleMenu } from '../reducers/menu'
import MenuItem from '../components/menuItem'
import MenuList from '../components/menuList'
import {  ListGroup } from 'reactstrap';

const MenuContainer = ({ menu, addToCart }) => (
  <MenuList title="Menu">
    {menu.map( (categories,index) => (
      <div key={index}>
        <h3 className="text-left"> {categories.category} </h3>
        <ListGroup>
          {
            categories.items.map((item,index) => (
              <MenuItem item={item} key={item.menu_item_id} onAddToCartClicked={() => addToCart(item.menu_item_id)}/>
            ))
          }
        </ListGroup>
      </div>
    ))}
  </MenuList>
)

MenuContainer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      menu_item_id:PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })).isRequired,
    category: PropTypes.string.isRequired,
    
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  menu: getVisibleMenu(state.menu)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(MenuContainer)
