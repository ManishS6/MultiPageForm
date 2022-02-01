import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
// import Button from "@material-ui/core/Button";
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
// import TextField from "@material-ui/core/TextField";
export default function Address(){
    const [form,setForm] = useContext(FormContext)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
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
    const updateAddress = e => { 
        setAddress(e.target.value)
        var updatedForm = {Address: address}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCity = e => { 
        setCity(e.target.value)
        var updatedForm = {City: city}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateState = e => { 
        setState(e.target.value) 
        var updatedForm = {State: state}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateZip = e => { 
        setZip(e.target.value)
        var updatedForm = {Zip: zip}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    // return(
    //     <div className='left'>
    //         <h2>This is address.</h2>
    //             Address: <input type="text" value={address} onSelect={updateAddress} onChange={updateAddress} placeholder='House Number'/> <br />
    //             City: <input type="text" value={city} onSelect={updateCity} onChange={updateCity} placeholder='Faridabad'/> <br />
    //             State: <input type="text" value={state} onSelect={updateState} onChange={updateState} placeholder='State'/> <br />
    //             Zip: <input type="text" value={zip} onSelect={updateZip} onChange={updateZip} placeholder='121001'/> <br />
    //         <Link to='/'>
    //             <Button
    //                 color="secondary"
    //                 variant="contained"
    //                 style={{ marginRight: "1rem" }}
    //             >
    //             Back
    //             </Button>
    //         </Link>
    //         <Link to='/contact'>
    //             <Button
    //             color="primary"
    //             variant="contained"
    //             >
    //             Next
    //             </Button>
    //         </Link>
    //     </div>
    // )
    return(
        <div className='Education left'>
                <Form>
                <Container >
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                            <h2>Education Details</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <h5>Where did you goto College?</h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>College Name</Form.Label>
                                <Form.Control type="text" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder="VIT" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>College Location</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Chennai" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Degree Type</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Bachelor's of Technology" maxLength={10}/>
                            </Form.Group>  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Stream</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="CSE" maxLength={10}/>
                            </Form.Group>  
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* FIX CONTROL */}
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder="01/08/2019" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* FIX CONTROL */}
                                <Form.Label>Graduation Date</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="31/03/2023" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'start'}}>
                            <Link to='/'>
                                <Button variant='warning'> Back </Button>
                            </Link>
                        </Col>
                        <Col style={{display: 'flex', justifyContent: 'end'}}>
                            <Link to='/contact'>
                                <Button variant='primary'> Next </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                </Form>
        </div>
    )
}