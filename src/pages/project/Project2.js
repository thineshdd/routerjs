import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Project2(){

    const navigation = useNavigate();

    return(
        <>
          <div>
            Project 2
          </div>
          <button onClick={() => navigation('/dashboard')}>Go back</button>




        </>
    );
}

export default Project2