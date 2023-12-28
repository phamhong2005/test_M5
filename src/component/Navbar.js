import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <h1>
                <Link to={"/products"}>Home</Link> |

                <Link to={"/products/add"}>Add</Link>|
                <Link to={"/products/list"}>List</Link>
            </h1>
            <hr/>
        </>
    )
}