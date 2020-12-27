import {Link} from 'react-router-dom';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails} from '../styles';
import {motion} from 'framer-motion';
import {titleAnimation} from '../animations';

// images
import logoSVG from '../assets/logo.svg';

const HomeHeaderSection = () => {
    return (
        <StyledHeader>
            <StyledHeaderAnimation>
                <img src={logoSVG} alt='logo' />
            </StyledHeaderAnimation>
            <StyledHeaderDetails>
                <motion.h1 variants={titleAnimation}>Ponad 30 lat doświadczenia w branży budowlanej</motion.h1>
                <motion.h2 variants={titleAnimation}>Charakteryzuje nas profesjonalizm, przywiązanie do detali oraz wieloletnie doświaczenie.</motion.h2>
                <motion.button variants={titleAnimation}><Link to="/contact">Kontakt</Link></motion.button>
            </StyledHeaderDetails>
        </StyledHeader>
    )
};

export default HomeHeaderSection;