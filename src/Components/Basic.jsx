import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
// import Button from "@material-ui/core/Button";
import '../App.css';

export default function Name(){
    const [form, setForm] = useContext(FormContext)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const updateFN = e => { 
        setFirstName(e.target.value) 
        var updatedForm = {firstName: firstName}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateLN = e => { 
        setLastName(e.target.value) 
        var updatedForm = {lastName: lastName}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }

    return(
        <div className='Name left'>
                <Form>
                <Container >
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                            <h2>Basic Details</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <h5>If these details are not correct employers wont be able to contact you!</h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder="Elon" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Musk" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Profession</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Full Stack Developer" maxLength={10}/>
                            </Form.Group>  
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* FIX CONTROL */}
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder="New Delhi" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Delhi" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="600127" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* FIX CONTROL */}
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder="example@gmail.com" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Password" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'end'}}>
                            <Link to='/page/education'>
                                <Button variant="primary"> Next </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                </Form>
        </div>
    )
}