import React from 'react'
import { categoryList, ratingList } from '../../../constants'
import FilterListToggle from '../../common/FilterListToggle'
import './styles.css'
import CheckboxProton from '../../common/CheckboxProton';
import SliderProton from '../../common/SliderProton';

const FilterPanel = ({ 
  selectedCategory, 
  selectCategory,
  selectedRating, 
  selectRating, 
  amenities,
  changeChecked,
  changedPrice,
  selectedPrice,
  }) => {
  return (
    <div>
      {/*Girls or boys hostel */}
      <div className="input-group">
        <p className='label'>Category</p>
        <FilterListToggle 
        options = {categoryList} 
        value = {selectedCategory} 
        selectToggle = {selectCategory}/>
      </div>


      {/*Amenities */}
      <div className = "input-group">
      <p className ='label'>Amenities</p>
      {amenities.map((amenities) => (
      <CheckboxProton
      key = {amenities.id} 
      amenities = {amenities}
      changeChecked = {changeChecked} />
      ))}
      </div>


      {/*Distance from college */}

      {/*Price range */}
      <div className="input-group">
      <p className='label-range'>Price range</p>
      <SliderProton value = {selectedPrice} changedPrice = {changedPrice}/>
      </div>


      {/*Star rating */}
      <div className="input-group">
      <p className='label'>Star Rating</p>
      <FilterListToggle 
        options = {ratingList} 
        value = {selectedRating} 
        selectToggle = {selectRating}/>
      </div>
      </div>
  )
}

export default FilterPanel