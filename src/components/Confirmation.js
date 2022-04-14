import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import ConfirmationView from "../view/ConfirmationView";
import Integration from "./Integration"
import { useParams } from "react-router";

function Confimation ({}){
    const [htmlSnippet, setHtmlSnippet] = useState("");

    const [searchParams] = useSearchParams();
    let {order_id} = useParams();
    console.log(order_id)

       useEffect(()=>{
            Integration.fetchOrder(order_id).then( data => {
                setHtmlSnippet(data.html_snippet);
                //console.log("presenter" +typeof data.html_snippet);
            })
        },[])
        
            return((htmlSnippet ?
                 <div>
                    <ConfirmationView
                        htmlSnippet={htmlSnippet}
                    /></div> : <div>no</div>)
            )

    }

export default Confimation;