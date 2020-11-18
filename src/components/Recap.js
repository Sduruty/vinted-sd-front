import React from 'react'
import {useHistory} from "react-router-dom";

const Recap = () => {
    const history=useHistory();
    return (
        <div className="recap">
            <h3>Félicitations ! Transaction correctement effectuée.</h3>
            <button onClick={() => {
          history.replace("/");
        }}>Go back home</button>
        </div>
    )
}

export default Recap
