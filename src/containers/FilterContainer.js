import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllMenu } from '../actions'
import {getfilterOptions} from '../reducers/filter'
import CategoryFilter from '../components/categoriesFilter'

const FilterContainer = ({ filterOptions, getAllMenu }) => (
    <div>
      <h4> Category</h4>
      <ul>
        {filterOptions.categories.map((filter) => (
          <CategoryFilter item={filter} onFilterApply={() => getAllMenu(filter)} key={filter}/> 
        ))}
      </ul>
    </div>
    
)

FilterContainer.propTypes = {
  filterOptions: PropTypes.shape({
    rating: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    
  })

}

const mapStateToProps = (state) => ({
  filterOptions: getfilterOptions(state.filterOptions)
})

export default connect(
  mapStateToProps,
  { getAllMenu },
)(FilterContainer)
