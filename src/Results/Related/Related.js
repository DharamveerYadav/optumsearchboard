
import React from 'react';
import Blog from './Blog/Blog';

import './Related.css';



const Related = (props) => {

    return (
        <div className="d-flex flex-column mt-4 related-container">
        <h3>Related</h3>
        <div className="related mt-4">
        <Blog />
        </div>

        </div>

    )
}

export default Related;