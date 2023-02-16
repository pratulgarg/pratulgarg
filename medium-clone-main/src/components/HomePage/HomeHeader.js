import React from 'react'
import Logo from './Logo.png';
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return(
        <header>
            <div className='header'>
                <div className="header-left">
                      <img src={Logo} alt="It Could Not Be Loaded"/>
                </div>
                <div className="header-right">
                    <div className="header-right-options">
                        <div className="header-right-option">
                            <Link to='/OurStory'>
                            <span> Our Story </span>
                            </Link>
                        </div>

                        <div className="header-right-option">
                            <Link to ='/membership' style={{textDecoration: "none"}}>
                            <span>Membership</span>
                            </Link>
                        </div>

                        <div className="header-right-option">
                            <Link to ='/write' style={{textDecoration: "none"}}>
                                <span>Write</span>
                            </Link>
                        </div>

                        <div className="header-right-option">
                            <span> Sign In </span>
                        </div>

                        <div className="header-right-started">
                            <span> <button> Get Started </button> </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader