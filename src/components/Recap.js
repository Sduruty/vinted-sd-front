import React from 'react'
import {useHistory} from "react-router-dom";

const Recap = () => {
    const history=useHistory();
    return (
        <div className="Recap">
            <h3>Félicitations ! vos poches sont bien vidées</h3>
            <button onClick={() => {
          history.replace("/");
        }}>Go back home</button>
        </div>
    )
}

export default Recap
