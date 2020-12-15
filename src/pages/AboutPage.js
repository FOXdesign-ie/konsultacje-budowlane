import styled from 'styled-components';
// images
import logoSVG from '../assets/logo.svg';
import imgAbout from '../assets/img-about.jpg';
import imgAbout2 from '../assets/img2-about.jpg';

const  AboutPage = () => {
    return(
        <StyledHomeWelcome>
        <HomeWelcomeAnimation >
            <img src={logoSVG} alt='logo' />
        </HomeWelcomeAnimation>
        <StyledHomeWelcomeHeader>
            <h1>Nasza historia</h1>
            <p>Jestesmy trzecim pokoleniem zajmujacym sie budownictwem. Nasz dziadek byl przedwojennym majstrem budowlanym. Po wojnie byl odpowiedzialny za odbudowe naszego rodzinnego miasteczka na Mazurach. W tym okresie doswiadczenie zaczal zdobywac nasz ojciec, ktory w 1964 roku otworzyl wlasna firme budowlana.</p>
        </StyledHomeWelcomeHeader>

        <StyledHomeAboutImgHeader>
                <img src={imgAbout} alt='img'/>
        </StyledHomeAboutImgHeader>

        <StyledAboutFlex>
           <div className='text'>
                <p>To u naszego ojca zdobywalismy nasze pierwsze doswiaczenie w branzy budowlanej. Po koniec lat osiedemdziesiatych kazdy z braci powstanowil zalozyc wlasne firmy remontowo-budowlane, wspolpracujac ze soba do dzis. </p>

                <p>Na poczatku zajmowalismy sie budowa domow jednorodzinnych a  takze remontami powojennych budynkow, glownie na terenie wojewodztwa Warminsko-Mazurskiego. W pierwszej polowie lat dziewiedzciesiatych obszar dzialania naszych firm rozszerzylismy na teram wojewodztwa Mazowieckiego, skupiajc sie glownie na pracy w Warszawie i jej okolicach.
                </p>
            </div>
            <div className='img'>
                <img src={imgAbout2} alt='img'/>
            </div>
         
        </StyledAboutFlex>


    </StyledHomeWelcome>
    )
};

const StyledHomeWelcome = styled.div`
    min-height: 85vh;
    position: relative;
    @media (max-width: 1100px) {
        min-height: 65vh;
    }
    @media (max-width: 600px) {
        min-height: auto;
    }
`;

const HomeWelcomeAnimation = styled.div`
    padding: 3em 0;
    width: 1100px;
    max-width: 75%;
    @media (max-width: 600px) {
        max-width: 95%;
        padding: 2em 0;
    }
    img {
        width: 100%;
    }
`;

const StyledHomeWelcomeHeader = styled.div`
    position: absolute;
    top: 5em;
    left: 45%;
    width: 45%;
    min-height: 75%;
  

    h1 {
        margin-bottom: 1.6em;
    }
    p {
        line-height: 2em;
        letter-spacing: 0.07em;
    }
    @media (max-width: 600px) {
       text-align: center;
        width: 80%;
        min-height: 75%;
        top: 2em;
        left: 50%;
        transform: translateX(-50%);
        h1 {
            font-size: 5vw;
            line-height: 1.5em;
        }
        h2 {
            font-size: 3.4vw;
            line-height: 2em;
        }
    
    }
`;

const StyledHomeAboutImgHeader = styled.div`
    width: 100vw;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        @media (max-width: 600px) {
            height: 20vh;
        }
    }
`;

const StyledAboutFlex = styled.div`
    padding: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.text {
        flex-basis: 60%;
        display: inline-block;
        border: 2px solid green;
        p {
            line-height: 2em;
            letter-spacing: 0.07em;
        }
       
        
    }
    .img {
        display: inline-block;
        flex-basis: 35%;
        height: 100%;
        border: 2px solid red;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

`;


export default AboutPage;
