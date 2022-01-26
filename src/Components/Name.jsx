import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from "@material-ui/core/Button";

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
        <div>
            <h2>This is name</h2>
            {/* <form onSubmit={addName}> */}
                First Name: <input type="text" value={firstName} onSelect={updateFN} onChange={updateFN} placeholder='Elon'/> <br />
                Last Name: <input type="text" value={lastName} onSelect={updateLN} onChange={updateLN} placeholder='Musk'/> <br />
            <Link to='/address'>
                {/* <h3>Go to Address</h3> */}
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