import styled from 'styled-components';
import {StyledImgHeader} from '../styles';
import {motion} from 'framer-motion';
import {imgAnimation} from '../animations';

// images
import imgAbout from '../assets/img-about.jpg';
import imgAbout2 from '../assets/img2-about.jpg';
import imgAbout3 from '../assets/img3-about.jpg';
import imgAbout4 from '../assets/img4-about.jpg';

const AboutDetailsSection = () => {
    return (
        <div>
            <StyledImgHeader>
                <motion.img variants={imgAnimation} src={imgAbout} alt='img'/>
            </StyledImgHeader>
            <StyledAboutDetails>
                <div className='text'>
                    <p>To u naszego ojca zdobywaliśmy nasze pierwsze doświaczenie w branży budowlanej. Pod koniec lat osiedemdziesiątych każdy z braci postanowił założyć własne firmy remontowo-budowlane, współpracując ze sobą do dziś. 
                    <br/><br/>
                    Na początku zajmowaliśmy się budową domów jednorodzinnych, a także remontami powojennych budynków, głównie na terenie województwa Warmińsko-Mazurskiego. W pierwszej połowie lat dziewięćdziesiątych obszar działania naszych firm rozszerzyliśmy na teren województwa Mazowieckiego, skupiając się głównie na pracy w Warszawie i jej okolicach.
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
                    <p>Byliśmy odpowiedzialni za budowę kilkustet Willi i rezydencji na terenie Warszawy, Konstancina, Magdalenki, Piaseczna, Zalesia czy Wilanowa. Mamy doświadcznie w stawianiu posiadłości prywatnych o powierzchni powyżej 1000m2, remontów przedwojennych wilii, wykończenia aparatamentów o wysokim standardzie, hotelu na Mazurach, osiedli domków jednorodzinnych pod Giżyckiem i wiele, wiele innych.</p>
                </div>
            </StyledAboutDetails2>
            <StyledAboutDetails3>
                <div className='text'>
                    <p>Skupiamy się również na konsultacjach, poradach i zarządzaniu projektami. Podpowiadamy rozwiązania, współpracujemy z biurami projektowymi, proponujemy technologie wykonania, które pozytywnie wpływają na środowisko naturalne.  
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
            @media (max-width: 800px) and (orientation: portrait) {
                line-height: 2em;
            }
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
    @media (max-width: 800px) and (orientation: portrait) {
        padding: 2em;
        display: flex;
        flex-direction: column;
        p {
            font-size: 3vw;
            padding: 1em 0;
            text-align: center;
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