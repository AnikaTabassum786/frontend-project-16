import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log(users)
    return (
        <div>
            This is users 2
        </div>
    );
};

export default Users2;