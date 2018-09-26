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
        <ListGroup>
          {
            menu.map((item,index) => (
              <MenuItem item={item} key={item.menu_item_id} onAddToCartClicked={() => addToCart(item.menu_item_id)}/>
            ))
          }
        </ListGroup>
  </MenuList>
)

MenuContainer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    menu_item_id:PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
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
