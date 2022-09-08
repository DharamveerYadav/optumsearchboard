import React from 'react';

import './IconComp.css';

const IconComp = (props) => {

    const Icon = props.icon;

    return (
        <>
        <Icon />
        {props.text ? <span  >{props.text}</span> : null}
        </>
    )
};

export default IconComp;
