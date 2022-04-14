import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

/**
 * A view to show if user is unauthorized to view another page.
 */
function SelectView() {
    return( 
        <Container>
            <div className="d-grid gap-2">
                <LinkContainer to="/checkout">
                <Button size="lg">
                    Single Payment Example
                </Button>
                </LinkContainer>
                
                <Button  size="lg">
                    Subscription Example
                </Button>
            </div>
        </Container>
    )
}

export default SelectView;