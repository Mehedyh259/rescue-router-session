import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';

const SinglePost = () => {
    const post = useLoaderData()
    const { sayHello, user } = useContext(MyContext)

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <i onClick={sayHello} className='font-bold cursor-pointer'>{user.job} {user.name}</i>
        </div>
    );
};

export default SinglePost;