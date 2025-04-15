import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div>
            Here is User Details
            <p>{name}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;