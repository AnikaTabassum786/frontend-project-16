import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;

    const {userId} = useParams();
    console.log(userId)
    return (
        <div>
            Here is User Details
            <p>{name}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;