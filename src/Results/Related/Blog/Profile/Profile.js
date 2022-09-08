import React from 'react';

import UserPng from '../../../../Assests/img/user.png';

import './Profile.css';

const Profile = (props) => {

    return (
        <img src={props.img || UserPng} alt="profile " className="profileImg" ></img>
    )
}

export default Profile;