import React, { useEffect, useState } from "react";
import {Spinner} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import ConfirmationView from "../view/ConfirmationView";
import Integration from "./Integration"
import { useParams } from "react-router";

/**
 * A component that fetches a placed order based on it's order id
 * @returns A ConfirmationView or a Spinner if the data is not ready
 */
function Confimation() {
    const [htmlSnippet, setHtmlSnippet] = useState("");
    const [searchParams] = useSearchParams();
    let {order_id} = useParams();

    useEffect(() => {
        Integration.fetchOrder(order_id).then(data => {
            setHtmlSnippet(data.html_snippet);
        })
    },[])
        
    return(
        (htmlSnippet ?
            <div><ConfirmationView htmlSnippet={htmlSnippet} /></div> 
            : 
            <div><Spinner animation="border" /></div>)
    )
}
export default Confimation;