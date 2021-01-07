import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {StyledImgHeader} from '../styles';

import imgHome from '../assets/img-home.jpg';
import imgHome2 from '../assets/img2-home.jpg';

import {motion} from 'framer-motion';
import {imgAnimation, fade} from '../animations';

const HomeAboutSection = () => {
    return (
        <StyledHomeAbout>
            <StyledImgHeader>
                <motion.img variants={imgAnimation} src={imgHome} alt='img'/>
            </StyledImgHeader>
            <StyledHomeAboutHeader>
                <motion.h1 variants={fade}>Czym się zajmujemy?</motion.h1>
                <p>Budujemy, remontujemy i wykańczamy domy od 1986 roku. Stworzyliśmy i wyremontowaliśmy wiele budynków m.in w Konstancinie-Jeziorna, Magdalence, Piasecznie, Wilanowie, Warszawie, Zalesiu, Gizycku, rejonie Warmińsko-Mazurkim. </p>
            </StyledHomeAboutHeader>
            <StyledHomeAboutIcons>
                <img src={imgHome2} alt='img2'/>
                <div>
                    <IconContainer>
                        <Link to="/uslugi/budownictwo">
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="store-alt" 
                                class="svg-inline--fa fa-store-alt fa-w-20" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512">
                                <path fill="currentColor" 
                                d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z">
                                </path>
                            </svg>
                            <p>Budowa domów</p>
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to="/uslugi/remonty">
                            <svg 
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
                            </svg>
                            <p>Remonty</p>
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to="/uslugi/wykonczenia">
                            <svg 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="paint-roller" 
                                class="svg-inline--fa fa-paint-roller fa-w-16" 
                                role="img" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512">
                                    <path fill="currentColor" 
                                    d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"></path></svg>
                                <p>Wykończenia</p>
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to="uslugi/konsultacje">
                            <svg 
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
                            </svg>
                            <p>Konsultacje</p>
                        </Link>
                    </IconContainer>
                </div>
            </StyledHomeAboutIcons>
        </StyledHomeAbout>
    )
};

const StyledHomeAbout = styled.div`
    background-color: #282828;
    padding-bottom: 4em;
    @media (max-width: 800px) and (orientation: portrait) {
        padding-bottom: 0em;
    }
`;

const StyledHomeAboutHeader = styled.div`
    padding: 4em;
    width: 80%;
    @media (max-width: 800px) and (orientation: portrait) {
        padding: 1.5em 2em;
        width: 100%;
        text-align: center;
    }
     /* Landscape */
     @media screen and (max-width: 770px) and (orientation: landscape) {
        padding: 2em 4em;
    }
    h1 {
        margin-bottom: 1em;
        @media (max-width: 800px) and (orientation: portrait) {
            font-size: 5vw;
            line-height: 1.5em;
        }
    }
    P {
        @media (max-width: 800px) and (orientation: portrait) {
            font-size: 3vw;
            line-height: 2em;
        }
    }
`;

const StyledHomeAboutIcons = styled.div`
    height: 50vh;
    padding: 0 4rem;
    display: flex;  
    justify-content: space-between;
    @media (max-width: 600px) {
       flex-direction: column;
       padding: 0 2rem;
       width: 100%;
       height: auto;
    }
    img {
        width: 50%;
        object-fit: cover;
        @media (max-width: 600px) {
            width: 100%;
        }
    }
    div {  
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: -1em;
        @media (max-width: 600px) {
            width: 100%;
            margin: 1.5em 0;
        }
    }
`;

const IconContainer = styled.div`
        height: 8vh;
        color: #717171;
        a {
            display: inline-block;
            height: 100%;
            margin: 0 auto;
        }
        @media (max-width: 600px) {
            width: 35vw !important;
        }

    p {
        display: inline-block;
        padding-top: 0.5em;
        width: 100%;
        transition: 1s linear;
        @media (max-width: 800px) and (orientation: portrait) {
          font-size: 0.8em;
        }
    }
    svg {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: 1s linear;
        @media (max-width: 800px) and (orientation: portrait) {
            height: 70%;
        }
        &:hover {
            color: #7f6921;
        }
        &:hover + p {
            color: #7f6921;
        }
    }
`;

export default HomeAboutSection;