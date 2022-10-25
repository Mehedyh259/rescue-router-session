import React, { createContext, useState } from 'react';


export const MyContext = createContext()


const AuthContext = ({ children }) => {

    const [user, setUser] = useState(
        {
            name: "mehedy",
            age: 25,
            job: 'bekar'
        }
    )

    const sayHello = () => {
        alert("Kaj kam nai.. tai ghumai.. hello from context")
    }

    const info = { user, sayHello }

    return (
        <MyContext.Provider value={info}>
            {children}
        </MyContext.Provider>
    )
};

export default AuthContext;