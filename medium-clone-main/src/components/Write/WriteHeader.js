import React from 'react';
import Logo from "../HomePage/Logo.png";
import {Link} from "react-router-dom";

const WriteHeader = () => {
    return(
        <header>
            <div className='Header'>
                <div className="Header-left">
                    <img src={Logo} alt="It Could Not Be Loaded"/>
                </div>
                <div className="Header-right">
                    <div className="Header-right-options">

                        <div className="Header-right-option">
                            <Link to="/">
                            <span> Sign In </span>
                            </Link>
                        </div>

                        <div className="Header-right-started">
                            <span>
                                <button> Start writing </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default WriteHeader;