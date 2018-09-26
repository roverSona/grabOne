import React from 'react';
import PropTypes from 'prop-types';


const CategoryFilter = ({ items=[], onFilterApply }) => (
    

    <ul>
        {items.map((item) => {
            <li>{item}</li>
        })} 
    </ul>
)

CategoryFilter.propTypes = {
    items: PropTypes.array.isRequired,
    onFilterApply: PropTypes.func.isRequired
}

export default CategoryFilter;
