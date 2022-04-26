import React, { useEffect } from 'react';
import {Container, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import parse from 'html-react-parser';

/**
 * 
 * @param htmlSnippet The html code of the confirmation widget to be rendered
 * @returns 
 */
function ConfirmationView({htmlSnippet}) {
    useEffect(() => {
        var checkoutContainer = document.getElementById('my-checkout-container')
        checkoutContainer.innerHTML = htmlSnippet
        var scriptsTags = checkoutContainer.getElementsByTagName('script')
        for (var i = 0; i < scriptsTags.length; i++) {
            var parentNode = scriptsTags[i].parentNode
            var newScriptTag = document.createElement('script')
            newScriptTag.type = 'text/javascript'
            newScriptTag.text = scriptsTags[i].text
            parentNode.removeChild(scriptsTags[i])
            parentNode.appendChild(newScriptTag)
        }
    }, [])

    return( 
        <Container>
            <div id="my-checkout-container" className="d-grid gap-2"></div>
        </Container>
    )
}
export default ConfirmationView;