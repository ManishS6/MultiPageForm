import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from "@material-ui/core/Button";

export default function Contact(){
    const [form, setForm] = useContext(FormContext)
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const updatePhone = e => { 
        setPhone(e.target.value) 
        var updatedForm = {Phone: phone}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateEmail = e => { 
        setEmail(e.target.value) 
        var updatedForm = {Email: email}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div>
            <h2>This is Contact.</h2>
                Phone: <input type="text" value={phone} onSelect={updatePhone} onChange={updatePhone} placeholder='+19876543211'/> <br />
                Email: <input type="text" value={email} onSelect={updateEmail} onChange={updateEmail} placeholder='elon@musk.com'/> <br />
            <Link to='/address'>
                {/* <h3>Back to Address</h3> */}
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
            <Link to='/skills'>
                {/* <h3>Go to Skills</h3> */}
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