import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone} = user;
    return (
        <div>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>Contact:{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;