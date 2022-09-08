import React from 'react';
import Profile from '../Profile/Profile';

import './BlogHeader.css';

const BlogHeader = (props) => {

    return (
        <div className="d-flex">
            <Profile />
            <div className="d-flex flex-column align-items-center">
                <span className="fs-4 fw-bold">John</span>
                <span className="fs-4 text-muted">Nov 01</span>
            </div> 
            <span className="align-self-center ms-auto text-muted">Seen by 109</span>           
        </div>
    )
}

export default BlogHeader;