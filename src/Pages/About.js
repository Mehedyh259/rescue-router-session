import React, { useContext } from 'react';
import { MyContext } from '../Context/AuthContext';

const About = () => {

    const { user } = useContext(MyContext)

    return (
        <div>
            <h2 className="text-3xl">This Is my About page</h2>
            <h4>My name is {user.name}</h4>
        </div>
    );
};

export default About;