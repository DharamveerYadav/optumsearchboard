import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
          {props.items.map(item => {
              return <NavigationItem item={item} key={item}></NavigationItem>
          })}
        </ul>
    )
}

export default navigationItems;