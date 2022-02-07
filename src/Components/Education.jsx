import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';

export default function Address(){
    const stylish = {
            padding: '10px 20px',
            color: '#03e9f4',
            fontSize: '16px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            overflow: 'hidden',
            transition: '.5s',
            marginTop:'5px',
            letterSpacing: '4px',
            background: 'black'
    }
    useEffect(()=>{
        var updatedForm = {step: 1}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [{collegeName='',collegeLocation='',degree='',stream='',degreeStart='',degreeEnd=''},setForm] = useContext(FormContext)
    const updateCN = e => { 
        const val=e.target.value;
        var updatedForm = {collegeName: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCL = e => { 
        const val=e.target.value;
        var updatedForm = {collegeLocation: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateD = e => { 
        const val=e.target.value;
        var updatedForm = {degree: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateS = e => { 
        const val=e.target.value;
        var updatedForm = {stream: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateDS = e => { 
        const val=e.target.value;
        var updatedForm = {degreeStart: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateDE = e => { 
        const val=e.target.value;
        var updatedForm = {degreeEnd: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
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
                        <h5>Where did you study?</h5>
                    </Col>
                </Row>
                <br />
                {/* add more button logic */}
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCollegeName">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control type="text" value={collegeName} onChange={updateCN} placeholder="VIT" maxLength={10}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCollegeLocation">
                            <Form.Label>College Location</Form.Label>
                            <Form.Control type="text" value={collegeLocation} onChange={updateCL} placeholder="Chennai" maxLength={10}/>
                        </Form.Group>    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formDegree">
                            <Form.Label>Degree Type</Form.Label>
                            <Form.Control type="text" value={degree} onChange={updateD} placeholder="Bachelor's of Technology" maxLength={10}/>
                        </Form.Group>  
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formStream">
                            <Form.Label>Stream</Form.Label>
                            <Form.Control type="text" value={stream} onChange={updateS} placeholder="CSE" maxLength={10}/>
                        </Form.Group>  
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDegreeStart">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="text" value={degreeStart} onChange={updateDS} placeholder="01/08/2019" maxLength={10}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDegreeEnd">
                            <Form.Label>Graduation Date</Form.Label>
                            <Form.Control type="text" value={degreeEnd} onChange={updateDE} placeholder="31/03/2023" maxLength={10}/>
                        </Form.Group>    
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    {/* <Col>
                        <a style={stylish} disabled href=" ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                        </a>
                    </Col> */}
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Button variant='success' style={{marginRight:'2rem'}}>Add More</Button>
                        <Link to='/page/job'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </Form>
        </div>
    )
}