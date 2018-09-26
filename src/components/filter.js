import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './categoriesFilter';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText,Button,Badge } from 'reactstrap';


const Filters = ({ categories, rating,onFilterApply }) => (
   <CategoryFilter items={categories} onFilterApply={onFilterApply}/> 
)

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  rating:PropTypes.array.isRequired,
  onFilterApply: PropTypes.func.isRequired
}

export default Filters;
