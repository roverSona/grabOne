import React from 'react'
import { connect } from 'react-redux'
import { searchMenu } from '../actions'
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

const SearchContainer = ({ searchString ,searchMenu }) => {
    let handleInput = (e) => {
      searchString = e.target.value;
    }
      return (
          <InputGroup>
            <input type="text" id="searchString" name="searchString" className="form-control input-number" value={searchString} min="1" max="100" onChange={(e)=>handleInput(e)} placeholder="search"/>
            <InputGroupAddon addonType="append"><Button  color="success" outline onClick={() => searchMenu(searchString)}>Search</Button></InputGroupAddon>
          </InputGroup>)
    
}


const mapStateToProps = (state) => ({
  searchString : state.searchString
})

export default connect(
  mapStateToProps,
  { searchMenu },
)(SearchContainer)
