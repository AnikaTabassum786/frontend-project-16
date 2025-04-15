import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title}= post;

    return (
        <div style={{border:'2px solid red'}}>
            <p>{title}</p>

            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;