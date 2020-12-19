import styled from 'styled-components';
import {StyledImgHeader} from '../styles';

// images
import imgAbout from '../assets/img-about.jpg';
import imgAbout2 from '../assets/img2-about.jpg';
import imgAbout3 from '../assets/img3-about.jpg';
import imgAbout4 from '../assets/img4-about.jpg';

const AboutDetailsSection = () => {
    return (
        <div>
            <StyledImgHeader>
                <img src={imgAbout} alt='img'/>
            </StyledImgHeader>
            <StyledAboutDetails>
                <div className='text'>
                    <p>To u naszego ojca zdobywalismy nasze pierwsze doswiaczenie w branzy budowlanej. Po koniec lat osiedemdziesiatych kazdy z braci powstanowil zalozyc wlasne firmy remontowo-budowlane, wspolpracujac ze soba do dzis. 
                    <br/><br/>
                    Na poczatku zajmowalismy sie budowa domow jednorodzinnych a  takze remontami powojennych budynkow, glownie na terenie wojewodztwa Warminsko-Mazurskiego. W pierwszej polowie lat dziewiedzciesiatych obszar dzialania naszych firm rozszerzylismy na teram wojewodztwa Mazowieckiego, skupiajc sie glownie na pracy w Warszawie i jej okolicach.
                    </p>
                </div>
                <div className='img'>
                    <img src={imgAbout2} alt='img'/>
                </div>
            </StyledAboutDetails>
            <StyledAboutDetails2>
                <div className='img'>
                    <img src={imgAbout3} alt='img'/>
                </div>
                <div className='text'>
                    <p>Bylismy odpowiedzialni za budowe kilkustet Willi i rezydencji na terenie Warszawy, Konstancina, Magdalenki, Piaseczna, Zalesia czy Wilanowa. Mamy doswiadcznie w stawianiu posiadlosci prywatnych o powierzchni powyzej 1000m2,  remontow przedswojennych wilii, wykonczenia aparatamentow o wysokim standardzie, hotelu na Mazurach, osiedli domkow jednorodzinnych pod Gizyckiem i wiele, wiele innych.</p>
                </div>
            </StyledAboutDetails2>
            <StyledAboutDetails3>
                <div className='text'>
                    <p>Skupiamy sie na takze na konsultacjach, poradach i zarzadzaniu projektami. Podpowiadamy rozwiazania,  wspolpracujemy z biurami projektowymi, proponujemy technologie wykonania, ktore pozytywnie wplyna na srodowisko naturalne.  
                    <br/><br/>
                    Ryszard i Bogdan Bukowscy</p>
                </div>
                <div className='img'>
                    <img src={imgAbout4} alt='img'/>
                </div>
            </StyledAboutDetails3>
        </div>
    )
};


const StyledAboutDetails = styled.div`
    padding: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        flex-basis: 60%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            line-height: 2em;
            letter-spacing: 0.07em;
        }
    }
    .img {
        flex-basis: 30%;
        height: 70vh;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: 600px) {
        padding: 2em;
        display: flex;
        flex-direction: column;
        p {
            font-size: 3vw;
            line-height: 1.5em;
            padding: 1em 0;
        }
    }
`;

const StyledAboutDetails2 = styled(StyledAboutDetails)`
    background-color: #282828;
    .text{
        height: 50vh;
    }
    .img {
        height: 50vh;
    }
`;

const StyledAboutDetails3 = styled(StyledAboutDetails)`
    .text{
        height: 50vh;
    }
    .img {
        height: 50vh;
    }
`;

export default AboutDetailsSection;