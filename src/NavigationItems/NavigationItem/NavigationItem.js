import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li className="NavigationItem" >
            <a href="#" >{props.item}</a>
        </li>
    )
};

export default navigationItem;