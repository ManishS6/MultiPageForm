import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
export default function Address(){
    const [form, setForm] = useContext(FormContext)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const updateAddress = e => { setAddress(e.target.value) }
    const updateCity = e => { setCity(e.target.value) }
    const updateState = e => { setState(e.target.value) }
    const updateZip = e => { setZip(e.target.value) }
    const addAddress = e => {
        e.preventDefault()
        var updatedForm = {address: address, city: city, state: state, zip: zip}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div>
            <h2>This is address.</h2>
            <form onSubmit={addAddress}>
                Address: <input type="text" value={address} onChange={updateAddress} placeholder='House Number'/> <br />
                City: <input type="text" value={city} onChange={updateCity} placeholder='Faridabad'/> <br />
                State: <input type="text" value={state} onChange={updateState} placeholder='State'/> <br />
                Zip: <input type="text" value={zip} onChange={updateZip} placeholder='121001'/> <br />
                <button>Submit</button>
            </form>
            <Link to='/'>
                <h3>Back to Name</h3>
            </Link>
            <Link to='/contact'>
                <h3>Go to Contact</h3>
            </Link>
        </div>
    )
}