import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import InnerHostel from '../../../InnerHostel';
const ListItem = ({
    item: {coverSrc, title, price, rating, category, distfromcollege, amenities},
}) => (
    <div className='listItem-wrap'>
        <div className='column'>
        <img src = {coverSrc} alt=  '' />
        </div>
        <header>
            <h4>{title}</h4>
            <span>⭐{rating}</span>
        </header>
        <footer>
        <p>
            <b>{category}</b> 
            <p><b> Amenities: {amenities} </b></p>
            <p><b> Distance from college: {distfromcollege} </b></p>
            <Link to ="/inner"> <button >View More</button></Link>
        </p>
        <p>
            <b>${price}</b>
        </p>
        </footer>
    </div>
)

export default ListItem
