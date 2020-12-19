import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails, StyledImgHeader} from '../styles';

// images
import logoSVG from '../assets/logo.svg';
import imgContact from '../assets/img-contact.jpg';
import email from '../assets/email-icon.png';
import mobile from '../assets/mobile-icon.png';
import location from '../assets/location-icon.png';

const ContactPage = () => {
    return(
        <div>
            <StyledContactHeader>
                <StyledHeaderAnimation>
                    <img src={logoSVG} alt='logo' />
                </StyledHeaderAnimation>
                <StyledContactHeaderDetails>
                    <h1>Skontaktuj sie z nami</h1>
                <StyledContact>
                    <div className='icon'>
                        <img className='email-icon' src={email} alt='email-logo'/>
                    </div>
                    <div className='contact-details'>
                        <p>Wyslij wiadomosc</p>
                        <p><a href = "mailto: kontakt@konsultacje.pl">kontakt@konsultacje.pl</a></p>
                    </div>
                        
                </StyledContact>
                <StyledContact>
                    <div className='icon'>
                        <img src={mobile} alt='mobile-logo'/>
                    </div>
                        <div className='contact-details'>
                            <p>Zadzwon do nas</p>
                            <p><a href="tel:+48555555555">+48555555555</a>
                            </p>
                    </div>
                </StyledContact>
                <StyledContact>
                <div className='icon'>
                    <img src={location} alt='location-logo'/>
                </div>
                    <div className='contact-details'>
                        <p>Spotkajmy sie</p>
                        <p>Warszawa, Gizycko</p>
                    </div>
                </StyledContact>
                </StyledContactHeaderDetails>
                <StyledImgHeaderMobile>
                     <img src={imgContact} alt='img'/>
                </StyledImgHeaderMobile>
            </StyledContactHeader>
        </div>
    )
};


const StyledContactHeader = styled(StyledHeader)`
    @media (max-width: 600px) {
        min-height: 78vh;
    }
 
`;

const StyledContactHeaderDetails = styled(StyledHeaderDetails)`
    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        margin-top: -2em;
    }

    @media (max-width: 600px) {
        min-height: 35vh;
    }
`;

const StyledContact = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    .icon {
        width: 10%;
        img {
            height: 100%;
        }
    }
    .contact-details {
        width: 75%;
    }

    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        .contact-details p  {
            font-size: 2vw;
            line-height: 1.5em;
            padding-left: 2em;
        }
    }

    @media (max-width: 600px) {
        height: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        .icon {
            width: 25%;
            .email-icon {
                height: 3vh;
            }
            img {
                height: 4vh;
            }
        }
        .contact-details p  {
            font-size: 3vw;
            line-height: 1.5em;
        }
    }
`;

const StyledImgHeaderMobile = styled(StyledImgHeader)`
    display: none;
    img {
        height: 30vh;
        /* padding: 0;
        margin: 0; */
    }
    
    @media (max-width: 600px) {
        display: inline-block;
        
    }
`

export default ContactPage;