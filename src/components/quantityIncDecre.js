import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

class QuantityIncDec extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: 'Card is empty',
      isLoaded: false,
      item: {}
    };
  }

  render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button  color="danger" outline onClick={this.props.addQuantity}>-</Button></InputGroupAddon>
                <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.props.quantity} min="1" max="100" onChange={this.props.addQuantity}/>
                <InputGroupAddon addonType="append"><Button  color="success" outline onClick={this.props.addQuantity}>+</Button></InputGroupAddon>
            </InputGroup>
        )};
    }

export default QuantityIncDec;
