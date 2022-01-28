import '../App.css'
import { useState, useContext,useEffect } from 'react';
import { FormContext } from './FormContext';
import {FaStar,FaPlusSquare,FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

export default function Skills(){
    const [form, setForm] = useContext(FormContext)
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState(null);
    const updateSkill = e => {
        setSkill(e.target.value)
    }
    const update = e => {
        e.preventDefault();
        var newSkill = {skill:skill,rating:rating}
        setSkills(skills.concat(newSkill))
        setRating(null)
        setSkill(null)
    }
    const removeSkill = name => {
        skills.filter(k => k !== name.skill)
    }
    return(
        <div>
            <div className='stars'>
                <input type="text" name="skill" id="skill" value={skill} onChange={updateSkill} /> <br />
                {/* creating array of 5 empty items and then mapping stars*/}
                <form onSubmit={update}>
                    {[...Array(5)].map((star,i)=>{
                        const ratingValue = i+1;
                        return (
                                <label>
                                    <input 
                                        type="radio" 
                                        name="rating" 
                                        value={ratingValue} 
                                        onClick={()=>{setRating(ratingValue)}}
                                        />
                                    <FaStar 
                                        size={80} 
                                        color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9" } 
                                        onMouseOver={()=>setHover(ratingValue)}
                                        onMouseOut={()=>setHover(null)} 
                                        />
                                </label>
                        )
                    })}
                    <FaPlusSquare
                        color='green'
                        size={40}
                        onClick={update}
                     />
                </form>
            </div>
            <div className="listSkills">
                <ul>
                    {[...skills].map((skill,i)=>(
                       <li key={i}>
                           {skill.skill}
                       </li> 
                    ))}
                </ul>
            </div>
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