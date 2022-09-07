import React from 'react';

import './BreadcrumbItem.css';

const BreadcrumbItem = (props) => {
    return (
        <li
        key={ props.ci }
        className="breadcrumb-item align-items-center breadcrumb-item-custom"
      >
        <button className={ `btn btn-link breadcrumb-item-custom__button ${ props.isDisabled } 
        ${ props.isDisabled ? 'breadcrumb-item-custom__button--disabled': ''}` }  style={ props.isDisabled ? {textDecoration: 'none'}: null}
        onClick={ () => props.selected(props.crumb) }>
          { props.crumb }
        </button>
      </li>
    )
}

export default BreadcrumbItem;