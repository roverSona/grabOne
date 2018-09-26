import { combineReducers } from 'redux'
import { RECEIVE_FILTERS } from '../constants/ActionTypes'
const intialState = {
	filterOptions: {
		categories :[],
		rating :[]
	}
}

const filterOptions = (state = intialState, action) => {
	console.log(action,state);
  switch (action.type) {
    case RECEIVE_FILTERS:
    state.filterOptions = action.filterOptions;
      return state
  	default : 
  		return state
  	}
}

export const getfilterOptions = state => {
	console.log(state);
	return state.filterOptions
};

export default filterOptions
