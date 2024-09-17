import React from 'react'
import { Helmet } from 'react-helmet';
import '../about/About.css';
import Match from "../match/Match";

export default function Home() {


    // const myarray = ['wodpress', 'react', 'HTML'];

    // const result = myarray.map((item) => {
        
    //     return <li key={item}>{item}</li>;

        
    // });     {/* {result} */}




    return (

        <>

<Helmet>
        <title>Home1 Page - My React App</title>
        <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
      </Helmet>
            <div className="home-page">
                <h1>  Home 1page</h1>
                <div class="container-score">
		        <div class="column-score large"> 

                    < Match/>
                </div>
                <div class="column-score small"> 12</div>

            </div>
            </div>


        </>
    );

}