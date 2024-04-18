import React from 'react';

function Home() {
    const user = JSON.parse(localStorage.getItem('users'));

    return (
        <div>
            <div className='container'>
                <h1>Name: {user.name}</h1>
                <h1>Email:{user.email}</h1>
                <h1>Password:{user.password}</h1>
            </div>
        </div>
    );
}

export default Home;
