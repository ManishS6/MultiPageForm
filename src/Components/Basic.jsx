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
    var [{firstName='',lastName='',profession='',city='',state='',zip='',email='',phone=''}, setForm] = useContext(FormContext)
    const updateFN = e => { 
        const val=e.target.value;
        var updatedForm = {firstName: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateLN = e => {  
        const val=e.target.value;
        var updatedForm = {lastName: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateP = e => {  
        const val=e.target.value;
        var updatedForm = {profession: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCity = e => {  
        const val=e.target.value;
        var updatedForm = {city: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateState = e => {  
        const val=e.target.value;
        var updatedForm = {state: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateEmail = e => {  
        const val=e.target.value;
        var updatedForm = {email: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updatePhone = e => {  
        const val=e.target.value;
        var updatedForm = {phone: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateZip = e => {  
        const val=e.target.value;
        var updatedForm = {zip: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }

    return(
        <div className='Basic left'>
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
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={updateFN} placeholder="Elon" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder="Musk" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formProfession">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control type="text" value={profession} onChange={updateP} placeholder="Full Stack Developer"/>
                            </Form.Group>  
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={city} onChange={updateCity} placeholder="New Delhi" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={state} onChange={updateState} placeholder="Delhi" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" value={zip} onChange={updateZip} placeholder="600127" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={updateEmail} placeholder="example@gmail.com" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value={phone} onChange={updatePhone} placeholder="+1(123)4567890" />
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