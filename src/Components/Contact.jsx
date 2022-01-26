import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
export default function Contact(){
    const [form, setForm] = useContext(FormContext)
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const updatePhone = e => { setPhone(e.target.value) }
    const updateEmail = e => { setEmail(e.target.value) }
    const addContact = e => {
        e.preventDefault()
        var updatedForm = {phone: phone, email: email}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div>
            <h2>This is Contact.</h2>
            <form onSubmit={addContact}>
                Phone: <input type="text" value={phone} onChange={updatePhone} placeholder='+19876543211'/> <br />
                Email: <input type="text" value={email} onChange={updateEmail} placeholder='elon@musk.com'/> <br />
                <button>Submit</button>
            </form>
            <Link to='/address'>
                <h3>Back to Address</h3>
            </Link>
            <Link to='/review'>
                <h3>Go to Review</h3>
            </Link>
        </div>
    )
}