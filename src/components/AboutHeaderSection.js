import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails} from '../styles';

// images
import logoSVG from '../assets/logo.svg';

const AboutHeaderSection= () => {
    return(
        <StyledHeader>
            <StyledHeaderAnimation>
                <img src={logoSVG} alt='logo' />
            </StyledHeaderAnimation>
            <StyledHeaderDetailsNoFlex>
                <h1>Nasza historia</h1>
                <p>Jestesmy trzecim pokoleniem zajmujacym sie budownictwem. Nasz dziadek byl przedwojennym majstrem budowlanym. Po wojnie byl odpowiedzialny za odbudowe naszego rodzinnego miasteczka na Mazurach. W tym okresie doswiadczenie zaczal zdobywac nasz ojciec, ktory w 1964 roku otworzyl wlasna firme budowlana.</p>
            </StyledHeaderDetailsNoFlex>
        </StyledHeader>
    )
};

const StyledHeaderDetailsNoFlex = styled(StyledHeaderDetails)`
    display: inline-block;
    h1 {
        margin-bottom: 1.6em;
    }
    p {
        line-height: 2em;
        letter-spacing: 0.07em;
    }
    @media (max-width: 600px) {
        h1 {
            margin-bottom: 1.2em;
        }
        p {
            font-size: 3vw;
            line-height: 1.7em;
        }
    }
`;

 export default AboutHeaderSection;