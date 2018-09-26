import React from 'react';
import PropTypes from 'prop-types';
import {Button } from 'reactstrap';



const CategoryFilter = ({ item, onFilterApply }) => {
    return (
        <li key={item}><Button color="link" onClick={onFilterApply}>{item}</Button></li>
    )
}

CategoryFilter.propTypes = {
    item: PropTypes.string.isRequired,
    onFilterApply: PropTypes.func.isRequired
}

export default CategoryFilter;
