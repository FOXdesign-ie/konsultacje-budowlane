import styled from 'styled-components';

// images
import logoSVG from '../assets/logo.svg';


const HomeWelcomeSection = () => {
    return (
        <StyledHomeWelcome>
            <HomeWelcomeAnimation >
                <img src={logoSVG} alt='logo' />
            </HomeWelcomeAnimation>
            <StyledHomeWelcomeHeader>
                <h1>Ponad 30 lat doswiadczenia w branzy budowlanej</h1>
                <h2>Charakteryzuje nas profesjonalizm, przywiazanie do detali oraz wieloletnie doswiaczenie.</h2>
                <button>Contact Us</button>
            </StyledHomeWelcomeHeader>
       
        </StyledHomeWelcome>
    )
};

const StyledHomeWelcome = styled.div`
    min-height: 85vh;
    position: relative;
`;

const HomeWelcomeAnimation = styled.div`
    padding: 3em 0;
    width: 1100px;
    max-width: 75%;
    img {
        width: 100%;
    }
`;

const StyledHomeWelcomeHeader = styled.div`
    position: absolute;
    top: 4em;
    left: 45%;
    width: 45%;
    min-height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`;

export default HomeWelcomeSection;