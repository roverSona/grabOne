import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, CardBody,
  CardTitle, Button, Col,Badge,InputGroup, InputGroupAddon } from 'reactstrap';

class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: {}
    };
  }

  render() {
    const { item } = this.props;
        return (
            <div>Summary</div>
        )};
    }

export default Summary;
