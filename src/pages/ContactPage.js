import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails, StyledImgHeader} from '../styles';


import {motion} from 'framer-motion';
import {pageAnimation, imgAnimation} from '../animations';

// images
import logoSVG from '../assets/logo.svg';
import imgContact from '../assets/img-contact.jpg';
import email from '../assets/email-icon.png';
import mobile from '../assets/mobile-icon.png';
import location from '../assets/location-icon.png';

const ContactPage = () => {
    return(
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial= "hidden"
            animate= "show" >
            <StyledContactHeader>
                <StyledHeaderAnimation>
                    <img src={logoSVG} alt='logo' />
                </StyledHeaderAnimation>
                <StyledContactHeaderDetails>
                    <h1>Skontaktuj się z nami</h1>
                <StyledContact>
                    <div className='icon email-icon'>
                        <img src={email} alt='email-logo'/>
                    </div>
                    <div className='contact-details'>
                        <p>Wyślij wiadomość</p>
                        <p><a href = "mailto: kontakt@konsultacje.pl">kontakt@konsultacje.pl</a></p>
                    </div>
                        
                </StyledContact>
                <StyledContact>
                    <div className='icon'>
                        <img src={mobile} alt='mobile-logo'/>
                    </div>
                        <div className='contact-details'>
                            <p>Zadźwoń do nas</p>
                            <p><a href="tel:+48555555555">+48555555555</a>
                            </p>
                    </div>
                </StyledContact>
                <StyledContact>
                <div className='icon'>
                    <img src={location} alt='location-logo'/>
                </div>
                    <div className='contact-details'>
                        <p>Spotkajmy się:</p>
                        <p>Warszawa, Giżycko</p>
                    </div>
                </StyledContact>
                </StyledContactHeaderDetails>
                <StyledImgHeaderMobile>
                     <motion.img variants={imgAnimation} src={imgContact} alt='img'/>
                </StyledImgHeaderMobile>
            </StyledContactHeader>
        </motion.div>
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
    justify-content: space-between;
    align-items: center;
    text-align: left;
    
    .icon {
        height: 3em;
        img {
            height: 100%;
        }
    }
    .email-icon {
        margin-left: 0.2em;
        height: 2.3em;
    }
    .contact-details {
        width: 80%;
        margin-left: 1em;
    }

    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        .icon {
        /* height: 3em; */
        img {
            height: 70%;
        }
    }
        .contact-details p  {
            font-size: 2vw;
            line-height: 1.5em;
            padding-left: 2em;
        }
    }

    @media (max-width: 600px) {
        height: 10%;
        display: flex;
        /* justify-content: space-between;
        align-items: center;
        text-align: center; */

        .icon {
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 1em;
            img {
                height: 3vh;
            }
        }
        .email-icon {
            img {
                height: 2vh;
            }
            
        }
        .contact-details p  {
            font-size: 3vw;
            line-height: 1.5em;
            letter-spacing: 0.08em;
        }
    }
`;

const StyledImgHeaderMobile = styled(StyledImgHeader)`
    display: none;
    img {
        height: 30vh;
    }
    
    @media (max-width: 600px) {
        display: inline-block;
        position: absolute;
        bottom: 1vh;
    }
`

export default ContactPage;