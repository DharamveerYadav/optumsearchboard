import React from 'react';

import './CategorySection.css';

const CategorySection = (props) => {

    return (
        <div className="d-flex flex-column p-2">
        <span className="fs-4 fw-bold">{props.data.heading}</span>
        <span className="small">{props.data.link}</span>
        <span className="fs-4 mt-2">{props.data.detail}</span>
        </div>
    )
};

export default CategorySection;