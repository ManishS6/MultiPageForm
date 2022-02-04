import {Link} from 'react-router-dom';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {Container,Row,Col} from 'react-bootstrap';

export default function Review(){
    return(
        <div className='left'>
            <Container>
                <h3>This is Review.</h3>
                <Link to='/summary'> <br />
                    {/* <h3>Back to Contact</h3> */}
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{ marginRight: "1rem" }}
                    >
                    Back
                    </Button>
                </Link>
            </Container>
        </div>
    )
}