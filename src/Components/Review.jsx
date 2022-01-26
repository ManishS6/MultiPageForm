import {Link} from 'react-router-dom';

export default function Review(){
    return(
        <div>
            <h3>This is Review.</h3>
            <Link to='/Contact'>
                <h3>Back to Contact</h3>
            </Link>
        </div>
    )
}