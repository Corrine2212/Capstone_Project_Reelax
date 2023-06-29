import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <>
        <header>
            <Link to="/profile"> profile </Link> 
            <Link to="/"> Home</Link>

        </header>
        </>
     );
}
 
export default NavBar;