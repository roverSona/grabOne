import React, { Component } from 'react';
import {  ListGroup } from 'reactstrap';
import Menuitem from './menuItem.js';

class MenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {
        restaurant: {
          menu: []
        }
      }
    };
  }

  componentDidMount() {
    fetch("https://demo8827789.mockable.io/menulist")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
            {items.restaurant.menu.map( (categories,index) => (
              <div key={index}>
                <h3 className="text-left"> {categories.category} </h3>
                <ListGroup>
                  {categories.items.map((item,index) => (
                    <Menuitem item={item} key={index}></Menuitem>
                  ))}
                </ListGroup>
              </div>
            ))}
          </div>
      )};
  }
}

export default MenuList;
