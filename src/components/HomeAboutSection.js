import styled from 'styled-components';

import imgHome from '../assets/img-home.jpg';


const HomeAboutSection = () => {
    return (
        <StyledAbout>
            <StyledAboutImgHeader>
                <img src={imgHome} alt='img'/>
            </StyledAboutImgHeader>
            <StyledAboutHeader>
                <h1>Czym sie zajmujemy?</h1>
                <p>Budujemy, remontujemy i wykanczamy domy od 1986 roku. Stworzylismy i wyremontowalismy wiele budynkow m.in w Konstaninie-Jeziorna,  Magdalence, Piasecznie, Wilanowie, Warszawie, Zalesiu,  Gizycku, rejonie Warminsko-Mazurkim. </p>
            </StyledAboutHeader>
            {/* <styled-HomeServices__Icons>


            </StyledHomeServices__Icons> */}
        </StyledAbout>
    
    )
};


const StyledAbout = styled.div`
    background-color: #282828;
`;

const StyledAboutImgHeader = styled.div`
    width: 100vw;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

const StyledAboutHeader = styled.div`
    padding: 4em;
    width: 80%;
    h1 {
        margin-bottom: 1em;
    }
    p {

    }
`;

export default HomeAboutSection;