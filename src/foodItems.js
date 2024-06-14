import React from 'react'
import { Link } from 'react-router-dom';
import './foodItems.css';

const FoodItems = (props) => {
    let { title, recipeID, imgURL, buttonName } = props

    return (
        <>
            <div>
                <div className='card my-4'>
                    <img src={imgURL} alt='' />
                    <div className='card-body'>
                        <h5 className='card-title text-center'>{title}</h5>
                        <Link to={`${recipeID}`} className='btn btn-dark ms-2' style={{ width: "255px" }}>{buttonName}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItems