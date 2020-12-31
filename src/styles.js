import styled from 'styled-components';

export const StyledHeader = styled.div`
    min-height: 85vh;
    position: relative;
    @media (max-width: 1100px) {
        min-height: 65vh;
    }

    @media (max-width: 800px) and (orientation: portrait) {
        min-height: auto;
    }
`;

export const StyledHeaderAnimation = styled.div`
    padding: 3em 0;
    width: 1100px;
    max-width: 75%;
    @media (max-width: 800px) and (orientation: portrait) {
        max-width: 95%;
        padding: 2em 0;
    }
    img {
        width: 100%;
    }
`;

export const StyledHeaderDetails = styled.div`
    position: absolute;
    top: 5em;
    left: 45%;
    width: 45%;
    min-height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
    /* align-items: center; */
    @media (max-width: 800px) and (orientation: portrait) {
        text-align: center;
        width: 80%;
        min-height: 75%;
        top: 2em;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.2em;
        h1 {
            font-size: 4.8vw;
            line-height: 1.5em;
        }
        h2 {
            margin-top: 2em;
            font-size: 3.4vw;
            line-height: 2em;
        }
        button {
            margin: 2.1em auto;
            width: 50%;
            font-size: 3vw;
        }
    }
      /* Landscape */
      @media screen and (max-width: 770px) and (orientation: landscape) {
        top: 3em;
        width: 45%;
        min-height: 68%;
    }
`;

export const StyledImgHeader = styled.div`
    width: 100vw;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        @media (max-width: 800px) and (orientation: portrait) {
            height: 20vh;
        }
    }
`;

