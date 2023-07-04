import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Foodpanda } from '@styled-icons/simple-icons';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';

const NavBar = ({ handleLogout, setSearchInput }) => {
    
    const StyledLogoImg = styled.img`
    height: 100px;
    width: auto;

    `;

    const StyledLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`

  //   const StyledFoodpandaIcon = styled(Foodpanda)`
  //   width: 24px;
  //   height: 24px;
  //   margin-right: 8px;
  // `;

    const StyledLogoutIcon = styled(LogOut)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    `;

    const StyledHeader = styled.header`
    background-color: #f0f0f0;
    padding: 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  `;

    return (
        <>

            <StyledHeader>
                <StyledLink to="/" onClick={() => setSearchInput("")}>
                    <StyledLogoImg src="../../2.png" alt="" />
                    {/* <StyledFoodpandaIcon /> */}
                </StyledLink>
                <StyledLink to="/" onClick={handleLogout}>
                    <StyledLogoutIcon />
                </StyledLink>
                <Link to="/profile"> profile </Link>


            </StyledHeader>
        </>
    );
}

export default NavBar;