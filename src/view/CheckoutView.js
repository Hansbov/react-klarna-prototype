import React, { useEffect } from 'react';
import {Container, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import parse from 'html-react-parser';


function CheckoutView({htmlSnippet}) {
    useEffect(()=>{
            console.log("hello"+typeof htmlSnippet)
            var checkoutContainer = document.getElementById('my-checkout-container')
            checkoutContainer.innerHTML = htmlSnippet
            var scriptsTags = checkoutContainer.getElementsByTagName('script')
            // This is necessary otherwise the scripts tags are not going to be evaluated
            for (var i = 0; i < scriptsTags.length; i++) {
                var parentNode = scriptsTags[i].parentNode
                var newScriptTag = document.createElement('script')
                newScriptTag.type = 'text/javascript'
                newScriptTag.text = scriptsTags[i].text
                parentNode.removeChild(scriptsTags[i])
                parentNode.appendChild(newScriptTag)
            }
    },[])

    return( 
        <Container>
            <div id="my-checkout-container" className="d-grid gap-2">
            </div>
        </Container>
    )
}

export default CheckoutView;