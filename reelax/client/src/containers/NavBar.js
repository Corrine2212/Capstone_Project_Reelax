import {Link} from 'react-router-dom'

const NavBar = ({handleLogout, setSearchInput}) => {
    return ( 
        <>
        <header>
            <Link to="/profile"> profile </Link> 
            <Link to="/*" onClick={() => setSearchInput("")}> Home</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>

        </header>
        </>
     );
}
 
export default NavBar;