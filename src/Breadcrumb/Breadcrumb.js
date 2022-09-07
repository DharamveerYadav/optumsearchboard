import React from 'react';
import './Breadcrumb.css';

import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav className=" d-flex justify-content-left align-items-center mx-4">
      <ul className="breadcrumb" >
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            
            return (
              <BreadcrumbItem crumb={crumb} ci={ci} isDisabled={disabled} selected={props.selected}/>  
            
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Breadcrumb;