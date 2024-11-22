import React, { useState } from 'react';

import Star from './Star';

const StarRating = () => {

    // Initialize a 'courseRating' state
    const [ courseRating, setCourseRating ] = useState(0);

    // Write a function that returns 5 Star components
    const renderStars = () => {
        
        let stars = [];
       
        for ( let i=0; i < 5 ; i++ ) {
            stars.push(
                <Star 
                    key={ i }
                    setRating={ () => handleSetRating( i + 1 ) }
                    isSelected={ courseRating > i } 
                />
            )
        };
        
        return stars;
    };
    

    // Write an event handler that updates the courseRating state.
    // Pass the function to a Star component via props
    const handleSetRating = (rating) => {
        if ( courseRating === rating ) {
            setCourseRating(0)
        } else {
            setCourseRating(rating)
        }
    }

    return (
        <ul className='course--stars'>
            {renderStars()}
        </ul>
    );
};

export default StarRating;