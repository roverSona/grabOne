import React, { Component } from 'react';
import { ListGroupItemText,ListGroupItem, ListGroup } from 'reactstrap';
import QuantityIncDec from './quantityIncDecre.js';

class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: 'Card is empty',
      isLoaded: false,
      items: [{name:'sonam',unit:1,price:100}],
      subtotal: 0,
    };
  }

  calculateSubtotal = () => {
    let subtotal = 0;
    this.state.items.forEach(item => {
       subtotal = subtotal+item.unit*item.price;
    });
    this.setState({
      subtotal
    })
  }

  componentDidMount() {
    this.calculateSubtotal();
  }



  render() {
    const { items ,error, subtotal} = this.state;
    const noOfItems = items.length;
      if (noOfItems === 0) {
        return <div>{error.message}</div>;
      } else {
        return (
            <div>
              <h3 className="text-left">Cart </h3>
              <p className="text-left"> {noOfItems} Item{noOfItems >1 && 's'}</p>
              <ListGroup>
                {items.map( (item,index) => (
                  <ListGroupItem key={index}>
                    <div className="float-left">
                        <ListGroupItemText className="text-left">{item.name} </ListGroupItemText>
                        <QuantityIncDec itemId="item.menu_item_id"></QuantityIncDec>                    
                    </div>
                    <div className="float-right">
                        <p>&#8377;{item.price}</p>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <hr/>
              <h3 className="float-left">Subtotal</h3>
              <p className="float-right">&#8377;{subtotal}</p>
          </div>
        )};
      }
    }

export default Summary;
