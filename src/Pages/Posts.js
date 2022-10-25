import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts)


    return (
        <div>
            <h2 className="text-3xl">This Is my Posts page</h2>
            <h3>Total posts: {posts.length}</h3>
            <div className="btn-group mb-5">
                {
                    posts?.slice(0, 15)?.map((post) => <Link to={`/posts/single-post/${post.id}`}><button className="btn">{post.id}</button></Link>)
                }

            </div>

            {/* single post content goes here */}
            <Outlet />



        </div>
    );
};

export default Posts;