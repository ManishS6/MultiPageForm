import {Link} from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';

export default function Contact(){
    useEffect(()=>{
        var updatedForm = {step: 2}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    var [{jobTitle='',jobEmployer='',jobCity='',jobState='',jobStart='',jobEnd=''}, setForm] = useContext(FormContext)
    const updateJT = e => { 
        const val=e.target.value;
        var updatedForm = {jobTitle: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJE = e => { 
        const val=e.target.value;
        var updatedForm = {jobEmployer: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJC = e => { 
        const val=e.target.value;
        var updatedForm = {jobCity: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJS = e => { 
        const val=e.target.value;
        var updatedForm = {jobState: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJStart = e => { 
        const val=e.target.value;
        var updatedForm = {jobStart: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJEnd = e => { 
        const val=e.target.value;
        var updatedForm = {jobEnd: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div className='Job left'>
                <Form>
                <Container >
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                            <h2>Job Details</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <h5>Where were you working last?</h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobTitle">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="text" value={jobTitle} onChange={updateJT} placeholder="Developer Advocate" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobEmployer">
                                <Form.Label>Employer</Form.Label>
                                <Form.Control type="text" value={jobEmployer} onChange={updateJE} placeholder="Google USA" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={jobCity} onChange={updateJC} placeholder="LA" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={jobState} onChange={updateJS} placeholder="CA" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobStart">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" value={jobStart} onChange={updateJStart} placeholder="01/08/2019" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobEnd">
                                <Form.Label>Graduation Date</Form.Label>
                                <Form.Control type="text" value={jobEnd} onChange={updateJEnd} placeholder="31/03/2023" maxLength={10}/>
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'start'}}>
                            <Link to='/page/education'>
                                <Button variant='warning'> Back </Button>
                            </Link>
                        </Col>
                        <Col style={{display: 'flex', justifyContent: 'end'}}>
                            <Link to='/page/summary'>
                                <Button variant='primary'> Next </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                </Form>
        </div>
    )
}