import '../App.css'
import { useState, useContext,useEffect } from 'react';
import { FormContext } from './FormContext';
import {FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

export default function Skills(){
    const [form, setForm] = useContext(FormContext)
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    useEffect(() => {
        var updatedForm = {Rating: rating}
        setForm( form => ({
            ...form,
            ...updatedForm
        }))
    },[form,rating,setForm]
    );
    return(
        <div className='stars'>
            <h3>Frontend Development</h3> <br />
            {/* creating array of 5 empty items and then mapping stars*/}
            {[...Array(5)].map((star,i)=>{
                const ratingValue = i+1;
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={()=>setRating(ratingValue)}
                            />
                        <FaStar 
                            size={100} 
                            color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9" } 
                            onMouseOver={()=>setHover(ratingValue)}
                            onMouseOut={()=>setHover(null)} 
                        />
                    </label>
                )
            })}
            <Link to='/contact'>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
            <Link to='/summary'>
                <Button
                color="primary"
                variant="contained"
                >
                Next
                </Button>
            </Link>
        </div>
    )
}