import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItemText,ListGroupItem, ListGroup, Button } from 'reactstrap';
//import QuantityIncDec from './quantityIncDecre.js';


const Cart  = ({ items, total, onCheckoutClicked }) => {
  const noOfItems = items.length
  const nodes = noOfItems > 0 ? (
        <ListGroup>
          {items.map( (item,index) => (
            <ListGroupItem key={index}>
              <div className="float-left">
                  <ListGroupItemText className="text-left text-width">{item.name} </ListGroupItemText>
                 {/* <QuantityIncDec itemId="item.menu_item_id"></QuantityIncDec> */}                   
              </div>
              <div className="float-right">
                  <p>&#8377;{item.price} * {item.quantity}</p>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
    ) : (
    <em>Please add some items to cart.</em>
  )

  return (
      <div>
        <h3 className="text-left">Cart </h3>
        <p className="text-left"> {noOfItems} Item{noOfItems > 1 && 's'}</p>
        <div>{nodes}</div>
        <hr/>
        <h3 className="float-left">Subtotal</h3>
        <p className="float-right">&#8377;{total}</p><br/><br/>
        <Button color="success" onClick={onCheckoutClicked} disabled={noOfItems > 0 ? false : true } block>Checkout</Button>
      </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
