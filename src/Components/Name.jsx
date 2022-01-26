import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';

export default function Name(){
    const [form, setForm] = useContext(FormContext)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const updateFN = e => { setFirstName(e.target.value) }
    const updateLN = e => { setLastName(e.target.value) }
    const addName = e => {
        e.preventDefault()
        var updatedForm = {firstName: firstName, lastName: lastName}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }

    return(
        <div>
            <h2>This is name</h2>
            <form onSubmit={addName}>
                First Name: <input type="text" value={firstName} onChange={updateFN} placeholder='Elon'/> <br />
                Last Name: <input type="text" value={lastName} onChange={updateLN} placeholder='Musk'/> <br />
                <button>Submit</button>
            </form>
            <Link to='/address'>
                <h3>Go to Address</h3>
            </Link>
        </div>
    )
}