import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Foodpanda } from '@styled-icons/simple-icons';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import callum from "../callum.jpg";
import placeholder from "../placeholder.jpg";
import defaultprofile from "../defaultprofile.jpeg";

const NavBar = ({ handleLogout, setSearchInput, user }) => {

  const StyledLogoImg = styled.img`
    height: 100px;
    width: auto;

    @media (max-width: 768px) {
      height: 80px;
    }

    @media (max-width: 480px) {
      height: 60px;
    }

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

  // const StyledLogoutIcon = styled(LogOut)`
  //   width: 24px;
  //   height: 24px;
  //   margin-right: 8px;
  //   `;

  const StyledHeader = styled.header`
    /* background-color: #f0f0f0; */
    padding: 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;  `;

  const StyledProfile = styled.p`

  `

  const StyledProfileImg = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 8px;
    border-radius: 100%;
  `;

  return (
    <>

      <StyledHeader>
        <StyledLink to="/" onClick={() => setSearchInput("")}>
          <StyledLogoImg src="../../2.png" alt="" />
          {/* <StyledFoodpandaIcon /> */}
        </StyledLink>
        <StyledLink to="/search/genre">Search by Genre</StyledLink>

        <StyledLink to="/profile">
          {/* <StyledProfileImg>  */}
          {user.username === "Callum" ? (
            <img className='nav-profile-img'
              src={callum}
              width={60}
              height={60}
              alt="profile-picture"
            />
          ) : user.username === "Scott" ? (
            <img className='nav-profile-img'
              src={placeholder}
              width={60}
              height={60}
              alt="profile-picture"
            />
          ) : (
            <img className='nav-profile-img'
              src={defaultprofile}
              width={60}
              height={60}
              alt="profile-picture"
            />
          )}

          {/* </StyledProfileImg> */}
        </StyledLink>


      </StyledHeader>
    </>
  );
}

export default NavBar;