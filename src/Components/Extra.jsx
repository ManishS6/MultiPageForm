import '../App.css'
import { useState, useContext } from 'react';
import { FormContext } from './FormContext';
import { FaStar, FaPlusSquare,FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button";
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {Container,Row,Col} from 'react-bootstrap';

export default function Extra() {
    // const [{languages=[]}, setForm] = useContext(FormContext);
    // const [form, setForm] = useContext(FormContext);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [languages, setlanguages] = useState([]);
    const [language, setlanguage] = useState(null);
    const [interests, setinterests] = useState([]);
    const [interest, setinterest] = useState(null);
    const updateinterest = e => {
        setinterest(e.target.value)
    }
    const updatelanguage = e => {
        setlanguage(e.target.value)
    }
    const updateL = e => {
        e.preventDefault();
        var newlanguage = { language: language, rating: rating }
        setlanguages(languages.concat(newlanguage))
        // setForm( form => ({
        //     ...form,
        //     ...{Summary:Summary.filter(k => k !== n.name)}
        // }))
        setRating(null)
        setlanguage(null)
    }
    
    const updateI = e => {
        e.preventDefault();
        var newinterest = { interest: interest, rating: rating }
        setinterests(interests.concat(newinterest))
        // setForm( form => ({
        //     ...form,
        //     ...{Summary:Summary.filter(k => k !== n.name)}
        // }))
        setRating(null)
        setinterest(null)
    }
    return (
        <div className='left'>
            <Container>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>This is Extra Section</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>Add Extra Fields to your resume?</h5>
                    </Col>
                </Row>
                {/* Languages */}
                <Row>
                    <h3>Languages:</h3>
                </Row>
                <Row>
                    <div className='stars' style={{display:'flex',alignItems:'center'}}>
                        <Col xs={6}>
                            {/* <input type="text" name="language" id="language" value={language} onChange={updatelanguage} /> */}
                            <Form.Group className="mb-3" controlId="formlanguage">
                                <Form.Control type="text" value={language} onChange={updatelanguage} placeholder="Java" maxLength={10}/>
                            </Form.Group>

                        </Col>
                        <br />
                        <Col xs={6} style={{display:'flex',alignItems:'center'}}>
                            {/* creating array of 5 empty items and then mapping stars*/}
                            <form onSubmit={updateL}>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => { setRating(ratingValue) }}
                                                />
                                            <FaStar
                                                size={50}
                                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseOver={() => setHover(ratingValue)}
                                                onMouseOut={() => setHover(null)}
                                                />
                                        </label>
                                    )
                                })}
                                <FaPlusSquare
                                    color='green'
                                    size={40}
                                    onClick={updateL}
                                    />
                            </form>
                        </Col>
                    </div>
                </Row>
                {/* <br />
                <Row>
                    <h3>Selected languages:</h3>
                </Row> */}
                <br />
                {[...languages].map((language, i) => (
                    <Row style={{margin:'4px'}}>
                        <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Col xs={6}>
                                {language.language}
                            </Col>
                            <Col xs={6}>
                            {[...Array(parseInt(language.rating))].map((_, k) =>
                                <FaStar
                                    key={k}
                                    size={50}
                                    color={"#ffc107"}
                                />
                            )} 
                            {
                                (5-parseInt(language.rating))>0 && [...Array(parseInt(5-language.rating))].map((_, k) =>
                                    <FaStar
                                        key={k}
                                        size={50}
                                        color={"#e4e5e9"}
                                    />
                                )
                            }
                            <FaTrash 
                                color='red'
                                size={40}
                                onClick={() => setlanguages((languages) => {
                                    const newlanguages = [...languages];
                                    newlanguages.splice(i, 1);
                                    return newlanguages
                                })}
                            />
                            </Col>
                        </Card>
                    </Row>
                ))}
                <br />
                {/* Interests */}
                <Row>
                <h3>Interests:</h3>
                </Row>
                <Row>
                <div className='stars' style={{display:'flex',alignItems:'center'}}>
                    <Col xs={6}>
                        {/* <input type="text" name="interest" id="interest" value={interest} onChange={updateinterest} /> */}
                        <Form.Group className="mb-3" controlId="forminterest">
                            <Form.Control type="text" value={interest} onChange={updateinterest} placeholder="Reading" maxLength={10}/>
                        </Form.Group>

                    </Col>
                    <br />
                    <Col xs={6} style={{display:'flex',alignItems:'center'}}>
                        {/* creating array of 5 empty items and then mapping stars*/}
                        <form onSubmit={updateI}>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => { setRating(ratingValue) }}
                                            />
                                        <FaStar
                                            size={50}
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            onMouseOver={() => setHover(ratingValue)}
                                            onMouseOut={() => setHover(null)}
                                            />
                                    </label>
                                )
                            })}
                            <FaPlusSquare
                                color='green'
                                size={40}
                                onClick={updateI}
                                />
                        </form>
                    </Col>
                </div>
                </Row>
                {/* <br />
                <Row>
                <h3>Selected Interests:</h3>
                </Row> */}
                <br />
                {[...interests].map((interest, i) => (
                <Row style={{margin:'4px'}}>
                    <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Col xs={6}>
                            {interest.interest}
                        </Col>
                        <Col xs={6}>
                        {[...Array(parseInt(interest.rating))].map((_, k) =>
                            <FaStar
                                key={k}
                                size={50}
                                color={"#ffc107"}
                            />
                        )} 
                        {
                            (5-parseInt(interest.rating))>0 && [...Array(parseInt(5-interest.rating))].map((_, k) =>
                                <FaStar
                                    key={k}
                                    size={50}
                                    color={"#e4e5e9"}
                                />
                            )
                        }
                        <FaTrash 
                            color='red'
                            size={40}
                            onClick={() => setinterests((interests) => {
                                const newinterests = [...interests];
                                newinterests.splice(i, 1);
                                return newinterests
                            })}
                        />
                        </Col>
                    </Card>
                </Row>
                ))}
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/skills'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to='/page/review'>
                            <Button disabled variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}