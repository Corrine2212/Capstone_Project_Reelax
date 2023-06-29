import {Link} from 'react-router-dom'

const NavBar = ({handleLogout}) => {
    return ( 
        <>
        <header>
            <Link to="/profile"> profile </Link> 
            <Link to="/*"> Home</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>

        </header>
        </>
     );
}
 
export default NavBar;