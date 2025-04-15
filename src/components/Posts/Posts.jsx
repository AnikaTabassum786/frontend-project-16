import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts= useLoaderData();
    console.log(posts)

    return (
        <div>
            This is Posts {posts.length}

            {
                posts.map(post => <Post key={post.id} post={post}></Post> )
            }
        </div>
    );
};

export default Posts;