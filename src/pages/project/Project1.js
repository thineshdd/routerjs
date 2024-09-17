import React from "react";
import { Link } from 'react-router-dom';

function Project1(){

    return(
        <>

        <span>   <Link to="/dashboard">go back</Link></span>
          <div>
            Project 1
          </div>
          <button> Read more </button>
        </>
    );
}

export default Project1