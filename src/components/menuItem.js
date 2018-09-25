import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button,Badge } from 'reactstrap';
import QuantityIncDec from './quantityIncDecre.js';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: {}
    };
  }
  handleChange = (event) => {
    console.log(event)
  }

  render() {
    const { item} = this.props;
        return (
            <ListGroupItem>
                
                <div className="float-left">
                {/* <img top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                    <ListGroupItemHeading className="text-left">{item.name} <span><Badge>&#8377;{item.price}</Badge></span></ListGroupItemHeading>
                    <ListGroupItemText className="text-left max-width">{item.description}</ListGroupItemText>
                </div>
                <div className="float-right">
                    <Button outline color="success" >Add</Button>
                    <br/><br/> 
                    <QuantityIncDec itemId={item.menu_item_id} addQuantity={this.handleChange}></QuantityIncDec>
                </div>
            </ListGroupItem>
        )};
    }

export default MenuItem;
