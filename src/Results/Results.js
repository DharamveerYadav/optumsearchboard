import React from 'react';
import Category from './Category/Category';
import Related from './Related/Related';

import './Results.css';

const Results = (props) => {
    return (
        <div className="results mx-4">
        <Category />
        <Related />
        </div>


    )
};


export default Results;