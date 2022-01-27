import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
export default function Review(){
    return(
        <div>
            <h3>This is Review.</h3>
            <Link to='/summary'> <br />
                {/* <h3>Back to Contact</h3> */}
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
        </div>
    )
}