import React, { useEffect, useState } from 'react'
import FilterPanel from '../Components/Home/FilterPanel'
import List from '../Components/Home/List';
//import SearchBar from '../../Components/Home/SearchBar';
import { dataList } from '../constants';
import EmptyView from '../Components/common/EmptyView';
import "../StyleSheet/onsale.css";

const HouseOnSale = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [amenities, setAmenities] = useState([
    {
      id:1,
      checked: false,
      label: 'Mess',
    },
    {
      id:2,
      checked: false,
      label: 'TV',
    },
    {
      id:3,
      checked: false,
      label: 'Laundry',
    },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsfound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) => 
  ! value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) => 
  ! value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const amenitiesStateList = amenities;
    const changeCheckedAmenities = amenitiesStateList.map((item) =>
      item.id === id ? {...item, checked: ! item.checked } : item);

      setAmenities(changeCheckedAmenities);
  };

  const handleChangePrice = (event, value) => {
     setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    //Rating filter
    if(selectedRating){
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //Category filter
    if(selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    //Amenities filter
    const amenitiesChecked = amenities
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

    if(amenitiesChecked.length) {
      updatedList = updatedList.filter(
        (item) => item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
        );
    }
     // Search Filter
     /*if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }*/

    //Price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsfound(false) : setResultsfound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, amenities, selectedPrice]);

  return (
    <div className='home'>
        {/*Search Bar*/}
        {/*<SearchBar />*/}

  <div className="home_panelList-wrap">
    <div className="home_panel-wrap">
        {/*Side panel*/}
        <FilterPanel
        selectCategory = {handleSelectCategory}
        selectedCategory = {selectedCategory}
        selectRating = {handleSelectRating}
        selectedRating = {selectedRating}
        amenities = {amenities}
        changeChecked = {handleChangeChecked}
        selectedPrice = {selectedPrice}
        changedPrice = {handleChangePrice}
        />
    </div>
    {/*List and Empty view*/}
    <div className="home_list-wrap">
        {resultsFound ? <List list = {list} /> : <EmptyView />}
    </div>
  </div>
    </div>
  )
}

export default HouseOnSale;









/*import React, { useEffect, useState } from 'react'
import FilterPanel from '../Components/Home/FilterPanel'
import List from '../Components/Home/List';
//import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../constants';
import EmptyView from '../Components/common/EmptyView';
import "../StyleSheet/onsale.css";

const HouseOnSale = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [amenities, setAmenities] = useState([
    {
      id:1,
      checked: false,
      label: 'Mess',
    },
    {
      id:2,
      checked: false,
      label: 'TV',
    },
    {
      id:3,
      checked: false,
      label: 'Laundry',
    },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsfound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) => 
  ! value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) => 
  ! value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const amenitiesStateList = amenities;
    const changeCheckedAmenities = amenitiesStateList.map((item) =>
      item.id === id ? {...item, checked: ! item.checked } : item);

      setAmenities(changeCheckedAmenities);
  };

  const handleChangePrice = (event, value) => {
     setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    //Rating filter
    if(selectedRating){
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //Category filter
    if(selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    //Amenities filter
    const amenitiesChecked = amenities
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

    if(amenitiesChecked.length) {
      updatedList = updatedList.filter(
        (item) => item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
        );
    }*/
     // Search Filter
     /*if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }*/

    //Price filter
    //const minPrice = selectedPrice[0];
    //const maxPrice = selectedPrice[1];

    //updatedList = updatedList.filter(
      //(item) => item.price >= minPrice && item.price <= maxPrice
    //);

    //setList(updatedList);

//    !updatedList.length ? setResultsfound(false) : setResultsfound(true);
  //};

  //useEffect(() => {
    //applyFilters();
  //}, [selectedRating, selectedCategory, amenities, selectedPrice]);

  //return (
    //<div className='home'>
      //  {/*Search Bar*/}

    {/*List and Empty view*/}
    {/* <div className="home_list-wrap">
        {resultsFound ? <List list = {list} /> : <EmptyView />}
    </div> */}
  //</div>
    //</div>
  //)
//}

//export default HouseOnSale;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import screenLoader from "../images/screenLoad.gif";
// import rentHouseAction from "../store/Actions/rentHouseActions";
// import "../StyleSheet/HouseListed.css";
// import { Link } from "react-router-dom";
// const HouseOnSale = () => {
  
//   return (
//     <div>Hostel</div>
//   );
// };

// export default HouseOnSale;
