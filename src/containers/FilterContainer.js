import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllMenu } from '../actions'
import {getfilterOptions} from '../reducers/filter'
import Filters from '../components/filter'

const FilterContainer = ({ filterOptions, getAllMenu }) => (
  <Filters
    categories={filterOptions.categories}
    rating={filterOptions.rating}
    onFilterApply={() => getAllMenu()} />
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
