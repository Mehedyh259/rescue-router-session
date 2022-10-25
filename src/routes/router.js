
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Posts from '../Pages/Posts';
import Layout from '../Layout/Layout';
import NotFound from '../Pages/NotFound';
import SinglePost from '../Pages/SinglePost';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/posts",
                loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
                element: <Posts />,
                children: [
                    {
                        path: "single-post/:postId",
                        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                        element: <SinglePost />
                    }
                ]
            },

        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

])