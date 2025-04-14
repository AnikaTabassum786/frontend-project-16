import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users =useLoaderData();
    console.log(users)

    const userStyle={
      border:'2px solid yellow',
      borderRadius:'20px',
      padding:'10px',
      margin:'10px'
    }
    
    return (
        <div>
          This is users 

          <div style={userStyle}>
            {
              users.map(user=><User key={user.id} user={user}></User>)
            }  
          </div> 
        </div>
    );
};

export default Users;