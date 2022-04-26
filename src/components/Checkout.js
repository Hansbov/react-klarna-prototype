import React, { useEffect, useState } from "react";
import {Spinner} from "react-bootstrap";
import {useLocation} from 'react-router-dom';
import CheckoutView from "../view/CheckoutView";
import Integration from "./Integration";
import singlePayment from "../orderData/singlePayment.json"
import subscriptionPayment from "../orderData/subscriptionPayment.json"

/**
 * A component that makes a request for a checkout based on if it's a single or subscribtion payment.
 * @returns CheckoutView or a Spinner depending if the data is recieved yet
 */
function Checkout() {
    const [htmlSnippet, setHtmlSnippet] = useState("");
    const location = useLocation();
    let orderData;
    let typeOfPurchase = "";

    if(!location.state) {
        typeOfPurchase = "single";
    } else {
        typeOfPurchase = location.state.type;
    }

    if(!typeOfPurchase || typeOfPurchase === "single") {
        orderData = singlePayment;
    } else if(typeOfPurchase === "subscribe") {
        orderData = subscriptionPayment;
    }

    useEffect(() => {
        Integration.createOrder(orderData).then(data => {
            setHtmlSnippet(data.html_snippet);
        })
    },[])
        
    return(
        (htmlSnippet ?
            <div><CheckoutView htmlSnippet={htmlSnippet} /></div> 
            : 
            <div><Spinner animation="border" /></div>)
    )
}
export default Checkout;