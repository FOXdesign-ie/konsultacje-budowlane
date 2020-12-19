import {Link} from 'react-router-dom';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails} from '../styles';

// images
import logoSVG from '../assets/logo.svg';


const HomeHeaderSection = () => {
    return (
        <StyledHeader>
            <StyledHeaderAnimation>
                <img src={logoSVG} alt='logo' />
            </StyledHeaderAnimation>
            <StyledHeaderDetails>
                <h1>Ponad 30 lat doswiadczenia w branzy budowlanej</h1>
                <h2>Charakteryzuje nas profesjonalizm, przywiazanie do detali oraz wieloletnie doswiaczenie.</h2>
                <button><Link to="/contact">Kontakt</Link></button>
            </StyledHeaderDetails>
        </StyledHeader>
    )
};


export default HomeHeaderSection;