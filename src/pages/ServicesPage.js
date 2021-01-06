import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StyledHeader, StyledHeaderAnimation, StyledHeaderDetails, StyledImgHeader} from '../styles';

import {motion} from 'framer-motion';
import {pageAnimation, imgAnimation, titleAnimation} from '../animations';

// images
import logoSVG from '../assets/logo.svg';
import imgUslugi from '../assets/img-uslugi.jpg';

const ServicesPage = () => {
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
            <StyledHeaderDetails>
                <motion.h1 variants={titleAnimation}>Nasze usługi</motion.h1>
                    <StyledServiceSvg>
                        <Link to="/uslugi/budownictwo">
                            <motion.svg 
                                variants={titleAnimation} 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="store-alt" 
                                class="svg-inline--fa fa-store-alt fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512">
                                    <path 
                                        fill="currentColor" 
                                        d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z">
                                    </path>
                            </motion.svg>
                            <motion.p variants={titleAnimation}>Usługi budowlane</motion.p>
                        </Link>
                    </StyledServiceSvg>
                    <StyledServiceSvg>
                        <Link to="/uslugi/wykonczenia">
                            <motion.svg 
                                variants={titleAnimation} 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="paint-roller" 
                                class="svg-inline--fa fa-paint-roller fa-w-16" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512">
                                    <path fill="currentColor" 
                                    d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"></path>
                            </motion.svg>
                            <motion.p variants={titleAnimation}>Wykończenia wnętrz</motion.p>
                        </Link>
                    </StyledServiceSvg>
                    <StyledServiceSvg>
                        <Link to="/uslugi/remonty">
                            <motion.svg 
                                variants={titleAnimation} 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="tools" 
                                class="svg-inline--fa fa-tools fa-w-16" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512">
                                <path 
                                    fill="currentColor" 
                                    d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z">
                                </path>
                            </motion.svg>
                            <motion.p variants={titleAnimation}>Renowacje i remonty</motion.p>
                        </Link>
                    </StyledServiceSvg>
                    <StyledServiceSvg>
                        <Link to="/uslugi/konsultacje">
                            <motion.svg 
                                variants={titleAnimation} 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="comments" 
                                class="svg-inline--fa fa-comments fa-w-18" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 576 512">
                                <path 
                                fill="currentColor" 
                                d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z">
                                </path>
                            </motion.svg>
                            <motion.p variants={titleAnimation}>Konsultacje budowlane</motion.p>
                        </Link>
                    </StyledServiceSvg>
            </StyledHeaderDetails>

        </StyledContactHeader>
        <StyledImgHeaderMobile>
                     <motion.img variants={imgAnimation} src={imgUslugi} alt='img'/>
                </StyledImgHeaderMobile>
    </motion.div>
    )
};

const StyledContactHeader = styled(StyledHeader)`
    @media (max-width: 600px) {
        /* height: 42vh; */
    }
`;

const StyledServiceSvg = styled.div`
    display: flex;
    text-align: center;
    height: 2.8em;
    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        height: 1.8em;
    }
    a {
        height: 100%;
        display: flex;
    }
    svg {
        width: 4em;
        &:hover {
            color: #7f6921;
        }
        &:hover + p {
            color: #7f6921 !important;
        }
    }
    p {
        margin-left: 3em;
        cursor: pointer;
        &:hover {
            color: #7f6921;
        }
    }
   
    @media (max-width: 800px) and (orientation: portrait) {
        height: 2em;
        width: 100%;
        margin: 0 auto;
        padding-left: 1em;
        svg {
         width: 1.5em;
        }
        p {
          font-size: 1.8vh;
        }
    }
`;

const StyledImgHeaderMobile = styled(StyledImgHeader)`
    display: none;
    img {
        height: 33vh;
        width: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 800px) and (orientation: portrait) {
        overflow: hidden;
        display: inline-block;
    }
`
export default ServicesPage;