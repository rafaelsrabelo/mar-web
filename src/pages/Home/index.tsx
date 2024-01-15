import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function Home () {
    const auth = useContext(AuthContext);
    return (
        <>
            <h1>Home page {auth.name}  </h1>
        </>
    )
}