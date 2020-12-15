import {Link} from 'react-router-dom';

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
                    <li><Link to="/">Strona Glowna</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/services">Uslugi</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
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
    @media (max-width: 600px) {
        padding: 0;
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledNavLogo = styled.div`
     img {
        width: 12vw;
        @media (max-width: 600px) {
        width: 22vw;
        }
     }
`;


const StyledNavMenu = styled.div`
    width: 55%;
    font-size: 1.4vw;
    color: #717171;
    @media (max-width: 600px) {
        padding: 0.5em 0;
        width: 85%;
        font-size: 3vw;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        position: relative;
    }
`;



export default Nav;
