import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router';



const Navbar = () => {

    let navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleCart = () => {
        navigate('/cart')
    }
    
    return (
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    
                    <div className="nav-left" id='nav-bottom'>
                        <span className='Language'>EN</span>
                        <div className='search-container'>
                            <input type="text" />
                            <i className='fa fa-search'></i>
                        </div>
                    </div>
                    <div id='nav-top'>
                    <div className="nav-centre">
                        <h1 className='Logo'>STYLE.</h1>
                    </div>
                    <div className="nav-right">
                        <div className="menu-items" onClick={handleRegister}>
                            REGISTER
                        </div>
                        <div className="menu-items">|</div>
                        <div className="menu-items" onClick={handleLogin}>
                            SIGN-IN
                        </div>
                        <div className="menu-items" id='nav-cart' onClick={handleCart}>
                            <i className='fa fa-shopping-cart fa-lg'></i>
                            <div className='badge'><span class="w3-badge ">9</span></div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar
