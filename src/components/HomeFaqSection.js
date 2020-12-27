import styled from 'styled-components';
import {AnimateSharedLayout} from 'framer-motion';
import {motion} from 'framer-motion';

import {fade} from  '../animations';

import ToggleFAQ from './ToggleFAQ';

const HomeFaqSection = () => {
    return (
        <StyledHomeFaq>
            <motion.h1 variants={fade}>Pytania?</motion.h1>
            <div>
                <AnimateSharedLayout>
                    <ToggleFAQ title='Krok po kroku, co potrzeba, aby zbudować dom?'>
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>    
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Jakie są koszty związane z budową domu?'>
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>    
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Kiedy rozpocząć budowę domu?'>
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>    
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Jak długo trwa remont/budowa domu?'>
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>    
                        </div>
                    </ToggleFAQ>
                </AnimateSharedLayout>
            </div>
        </StyledHomeFaq>
    )
};

const StyledHomeFaq = styled.div`
    min-height: 80vh;
    padding: 4em;
    width: 100%;
    @media (max-width: 600px) {
        padding: 2em;
        text-align: center;
    }
    /* Landscape */
    @media screen and (max-width: 770px) and (orientation: landscape) {
        padding: 2em 4em;
    }
    h1 {
        margin-bottom: 1em;
        @media (max-width: 600px) {
            font-size: 5vw;
            margin-bottom: 2em;
        }
    }
    div {
        min-height: 13vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 600px) {
            width: 100%;
            min-height: 10vh;
        }
        .answer {
            p {
            color: #7f6921;
            @media (max-width: 600px) {
                font-size: 1vw;
            } 
            }
        }
    
        .question {
            cursor: pointer;
            border-bottom: 1px solid #7f6921;
            padding: 2em 0;
            @media (max-width: 600px) {
               p {
                font-size: 3vw;
               } 
            } 
      
        }
    }
`;

export default HomeFaqSection;