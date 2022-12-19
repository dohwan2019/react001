import React from 'react';
import { useNavigate, useLocation } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location', location);
    return (
        <div style={{display: location.pathname === '/' ? 'none' : 'block'}}>
            <button onClick={() => navigate('/')}>목차</button>    
        </div>
    );
};

export default Header;