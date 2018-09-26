import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartItems } from '../reducers'
import Cart from '../components/cart'

const CartContainer = ({ items, total, checkout }) => (
  <Cart
    items={items}
    total={total}
    onCheckoutClicked={() => checkout(items)} />
)

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    menu_item_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items: getCartItems(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
