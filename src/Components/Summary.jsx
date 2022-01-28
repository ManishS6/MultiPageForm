import {Link} from 'react-router-dom';
import { useState, useContext,useCallback } from 'react';
import { FormContext } from './FormContext';
import Button from "@material-ui/core/Button";
import { List, ListItem } from '@material-ui/core'

export default function Summary(){
    // const [Summary, setSummary] = useState([]);
    const [{Summary=[]}, setForm] = useContext(FormContext)
    const items = [
        { name: 'I am Honest' },
        { name: 'I am Trustworthy' },
        { name: 'I respect everyone\' opinion' },
        { name: 'I can work in a team' }
    ]
    
    // TODO: FIX: this useEffect is in endless loop.
    // useEffect(() => {
    //     var updatedForm = {Summary: Summary}
    //     setForm( form => ({
    //         ...form,
    //         ...updatedForm
    //     }))
    //     console.log(form)
    //     } // also do I need a dependency array here?
    // );
    
    const  handleChange = useCallback( (n)=> {
        let index = Summary.indexOf(n.name);
        if (index === -1) {
            setForm( form => ({
                ...form,
                ...{Summary:Summary.concat(n.name)}
            }))
        } else {
            // const newArray  = Summary.filter(k => k !== n.name);
            setForm( form => ({
                ...form,
                ...{Summary:Summary.filter(k => k !== n.name)}
            }))
            // setSummary([...newArray]);
        }
    },[Summary, setForm])
    function buttonOnChange (n) {
        return Summary.indexOf(n.name) === -1 ? 'Add' : 'Remove'
    }

    return(
        <div>
            <h3>This is Summary</h3>
            <List>
                {items.map(n => {
                return (
                    <ListItem key={n.name} id='list'>
                        {n.name}
                    <Button
                        color={buttonOnChange(n) === 'Remove' ? 'secondary' : 'primary'}
                        variant='contained'
                        style={{ marginRight: '1rem' }}
                        className='Add'
                        onClick={() => handleChange(n)}
                    >
                        {buttonOnChange(n)}
                    </Button>
                    </ListItem>
                )
                })}
            </List>
            <Link to='/skills'>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
            <Link to='/extra'>
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