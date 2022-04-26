import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

/**
 * A view to show if user is unauthorized to view another page.
 */
function HomeView({handleClick}) {
    return( 
        <Container>
            <div className="d-grid gap-2">
                <Button size="lg" onClick={() => {handleClick("single")}}>
                    Single Payment Example
                </Button>
                <Button size="lg" onClick={() => {handleClick("subscribe")}}>
                    Subscription Example
                </Button>
            </div>
        </Container>
    )
}
export default HomeView;