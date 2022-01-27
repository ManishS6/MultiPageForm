import {Link} from 'react-router-dom';
import { useState, useContext,useEffect } from 'react';
import { FormContext } from './FormContext';
import Button from "@material-ui/core/Button";
import { List, ListItem } from '@material-ui/core'

export default function Summary(){
    const [selectItem, setSelectItem] = useState([]);
    const [form, setForm] = useContext(FormContext)
    const items = [
        { name: 'Item 1' },
        { name: 'Item 2' }
    ]
    useEffect(() => {
            var updatedForm = {Summary: selectItem}
            setForm( form => ({
                ...form,
                ...updatedForm
            }))
        },[form,selectItem,setForm]
    );

    function handleChange (n) {
        let index = selectItem.indexOf(n.name)
        if (index === -1) {
            setSelectItem(selectItem.concat(n.name))
        } else {
            setSelectItem(selectItem.filter(k => k !== n.name))
        }
    }
    function buttonOnChange (n) {
        if (selectItem.indexOf(n.name) === -1) {
          return 'Add'
        } else {
          return 'Remove'
        }
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
            <br />
            <h3>{selectItem}</h3>
            <br />
            <Link to='/skills'>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
            <Link to='/review'>
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