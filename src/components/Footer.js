import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            Copyright © 2020 Konsultacje Budowalne 
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    background-color: #282828;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
          font-size: 3vw;
          height: 10vw;
        }
`;

export default Footer;

