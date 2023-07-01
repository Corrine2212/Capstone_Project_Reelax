import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Foodpanda } from '@styled-icons/simple-icons';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';

const NavBar = ({ handleLogout, setSearchInput }) => {
    const StyledLink = styled(Link)`

  color: #333;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

    const StyledFoodpandaIcon = styled(Foodpanda)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
  `;


 
    const StyledLogoutIcon = styled(LogOut)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    `;
    return (
        <>

            <header>
                <Link to="/profile"> profile </Link>
                <StyledLink to="/" onClick={() => setSearchInput("")}>
                    <StyledFoodpandaIcon />
                </StyledLink>
                <StyledLink to="/" onClick={handleLogout}>
                    <StyledLogoutIcon/>
                </StyledLink>


            </header>
        </>
    );
}

export default NavBar;