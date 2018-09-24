import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, CardBody,
  CardTitle, Button, Col,Badge,InputGroup, InputGroupAddon } from 'reactstrap';

class Menuitem extends Component {

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
    const { item } = this.props;
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
                    <InputGroup>
                        <InputGroupAddon addonType="prepend"><Button  color="danger" outline onClick={this.handleChange()}>-</Button></InputGroupAddon>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100" onChange={this.handleChange()}/>
                        <InputGroupAddon addonType="append"><Button  color="success" outline onClick={this.handleChange()}>+</Button></InputGroupAddon>
                    </InputGroup>  
                </div>
            </ListGroupItem>
        )};
    }

export default Menuitem;
