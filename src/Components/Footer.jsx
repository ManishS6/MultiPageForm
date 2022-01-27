// import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
export default function Footer(){
    const navStyle = {
        background:'red',
        color:'white'
      };
    const [form] = useContext(FormContext)
    return(
        <div>
            <h2 style={navStyle}>This is Footer.</h2>
            {Object.entries(form).map(([key, value]) => (
                <h3 key={value}>{key} : {value} </h3>
            ))}
        </div>
    )
}