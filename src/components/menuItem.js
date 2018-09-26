import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button,Badge } from 'reactstrap';
//import QuantityIncDec from './quantityIncDecre.js';

const MenuItem = ({ item, onAddToCartClicked }) => (
    <ListGroupItem>
        
        <div className="float-left max-width">
        {/* <img top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
            <ListGroupItemHeading className="text-left">{item.category} - {item.name} <span><Badge>&#8377;{item.price}</Badge></span></ListGroupItemHeading>
            <ListGroupItemText className="text-left ">{item.description}</ListGroupItemText>
        </div>
        <div className="float-right">
            <Button outline color="success" onClick={onAddToCartClicked}>Add</Button>
            <br/><br/> 
            {/*<QuantityIncDec itemId={item.menu_item_id} addQuantity={this.handleChange}></QuantityIncDec>*/}
        </div>
    </ListGroupItem>
)

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default MenuItem;
