import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
export default function Address(){
    const [form,setForm] = useContext(FormContext)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const updateAddress = e => { 
        setAddress(e.target.value)
        var updatedForm = {address: address}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCity = e => { 
        setCity(e.target.value)
        var updatedForm = {city: city}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateState = e => { 
        setState(e.target.value) 
        var updatedForm = {state: state}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateZip = e => { 
        setZip(e.target.value)
        var updatedForm = {zip: zip}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div>
            <h2>This is address.</h2>
                Address: <input type="text" value={address} onSelect={updateAddress} onChange={updateAddress} placeholder='House Number'/> <br />
                City: <input type="text" value={city} onSelect={updateCity} onChange={updateCity} placeholder='Faridabad'/> <br />
                State: <input type="text" value={state} onSelect={updateState} onChange={updateState} placeholder='State'/> <br />
                Zip: <input type="text" value={zip} onSelect={updateZip} onChange={updateZip} placeholder='121001'/> <br />
            <Link to='/'>
                <h3>Back to Name</h3>
            </Link>
            <Link to='/contact'>
                <h3>Go to Contact</h3>
            </Link>
        </div>
    )
}