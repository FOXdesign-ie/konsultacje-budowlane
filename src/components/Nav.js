import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

// logo
import logo from '../assets/logo.png';

const Nav = () => {
    
    const {pathname} = useLocation();

    return (
        <StyledNav>
            <StyledNavLogo>
                <img src={logo} alt='logo'/>
            </StyledNavLogo>
            <StyledNavMenu>
                <ul>
                    <li>
                        <Link to="/">Strona Główna</Link>
                        <Line 
                        transition={{ duration: 0.75 }} 
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/'  ? '100%' : '0%'}}
                        />
                    </li>
                    <li>
                        <Link to="/about">O nas</Link>
                        <Line 
                        transition={{ duration: 0.75 }} 
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/about'  ? '100%' : '0%'}}
                    />
                    </li>
                    <li>
                        <Link to="/services">Usługi</Link>
                        <Line 
                        transition={{ duration: 0.75 }} 
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/services'  ? '100%' : '0%'}}
                        />
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                        <Line 
                        transition={{ duration: 0.75 }} 
                        initial={{width:"0%"}}
                        animate={{width: pathname === '/contact'  ? '100%' : '0%'}}
                        />
                    </li>
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
    position: sticky;
    top: 0;
    z-index: 44;
    @media (max-width: 600px) {
        padding: 0;
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledNavLogo = styled.div`
     img {
        width: 12vw;
        @media (max-width: 800px) and (orientation: portrait) {
            width: 22vw;
        }
     }
`;

const StyledNavMenu = styled.div`
    width: 55%;
    font-size: 1.4vw;
    color: #717171;
    @media (min-width: 650px) and (max-width: 800px) and (orientation: portrait) {
        width: 65%; 
        padding: 1em 0;
        font-size: 2vw;
    }
    @media (max-width: 600px) {
        padding: 0.5em 0;
        width: 85%;
        font-size: 3vw;
    }
    @media screen and (max-width: 770px) and (orientation: landscape) {
        font-size: 1.8vw;
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

const Line = styled(motion.div)`
    height: 0.1rem;
    background: #7f6921;
    width: 0%;
    position: absolute;
    bottom: -10%;
    left: 0%;
    @media (max-width: 1300px) {
        left: 0%;
    }
    @media (max-width: 600px) {
        height: 0.01rem;
    }
    @media screen and (max-width: 770px) and (orientation: landscape) {
        height: 0.05rem;
    }
`; 

export default Nav;