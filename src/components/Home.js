import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import HomeView from "../view/HomeView";
import { useParams } from "react-router";
import { useNavigate} from 'react-router-dom';
import Checkout from "./Checkout";

function Home ({}){
       const navigate = useNavigate();

       function handleClick(value){
            navigate("/checkout", {state:{type:value}})
       }
        
    return(<HomeView
        handleClick={handleClick}
    />)
                 

    }

export default Home;