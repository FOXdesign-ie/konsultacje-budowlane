import styled from 'styled-components';

// logo
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <StyledNav>
            <StyledNavLogo>
                <img src={logo} alt='logo'/>
            </StyledNavLogo>
            <StyledNavMenu>
                <ul>
                    <li>Strona Glowna</li>
                    <li>O nas</li>
                    <li>Uslugi</li>
                    <li>Kontakt</li>
                </ul>
            </StyledNavMenu>

        </StyledNav>
    )
};


const StyledNav = styled.nav`
    background-color: #282828;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4em;
`;

const StyledNavLogo = styled.div`
     /* width: 15%; */
  
     img {
         /* height: 80%; */
         width: 12vw;
     }
`;


const StyledNavMenu = styled.div`

    width: 55%;
    font-size: 1.4vw;
    color: #717171;
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
  
    }
`;



export default Nav;
