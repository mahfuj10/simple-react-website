import React from 'react';
import Banner from './Banner';
import Nav from './Navbar'

const Header = () => {
    return (
        <div style={{backgroundColor:"#F4F1EA",height:"100vh"}}>
            <Nav></Nav>
            <Banner></Banner>
        </div>
    );
};

export default Header;