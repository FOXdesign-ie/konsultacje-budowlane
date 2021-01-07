import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails, StyledImgHeader} from '../styles';
import {motion} from 'framer-motion';
import {pageAnimation, imgAnimation, titleAnimation} from '../animations';

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
                    <motion.h1 variants={titleAnimation}>Skontaktuj się z nami</motion.h1>
                <StyledContact>
                    <motion.div variants={titleAnimation} className='icon email-icon'>
                        <img src={email} alt='email-logo'/>
                    </motion.div>
                    <motion.div variants={titleAnimation} className='contact-details'>
                        <p>Wyślij wiadomość</p>
                        <p><a href = "mailto: kontakt@konsultacje-budowlane.pl">kontakt@konsultacje-budowlane.pl</a></p>
                    </motion.div>
                </StyledContact>
                <StyledContact>
                    <motion.div variants={titleAnimation} className='icon'>
                        <img src={mobile} alt='mobile-logo'/>
                    </motion.div>
                    <motion.div variants={titleAnimation} className='contact-details'>
                        <p>Zadźwoń do nas</p>
                        <p><a href="tel:+48-505-875-891">+48-505-875-891</a></p>
                    </motion.div>
                </StyledContact>
                <StyledContact>
                    <motion.div variants={titleAnimation} className='icon'>
                        <img src={location} alt='location-logo'/>
                    </motion.div>
                    <motion.div variants={titleAnimation} className='contact-details'>
                        <p>Spotkajmy się:</p>
                        <p>Warszawa, Giżycko</p>
                    </motion.div>
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
        height: 80vh;
    }
`;

const StyledContactHeaderDetails = styled(StyledHeaderDetails)`
    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        margin-top: -2em;
    }

    @media (max-width: 600px) {
        min-height: 30vh;
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

    @media (max-width: 800px) and (orientation: portrait) {
        height: 10%;
        display: flex;
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
        height: 37vh;
    }
    
    @media (max-width: 600px) {
        display: inline-block;
        position: absolute;
        bottom: 1vh;
    }
`

export default ContactPage;