import React from 'react';
import './css/style.css';
import WriteHeader from "./WriteHeader";
import WriteMain from "./WriteMain";

const index = () => {
    return(
        <div>
            <WriteHeader />
            <WriteMain />
        </div>
    )
}

export default index;