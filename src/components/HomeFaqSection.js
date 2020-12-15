import styled from 'styled-components';

const HomeFaqSection = () => {
    return (
        <StyledHomeFaq>
            <h1>Pytania?</h1>
            <div>
                <p>Krok po kroku, co potrzeba, aby zbudowac dom?</p>
                <p>Jakie sa koszty zwiazane z budowa domu?</p>
                <p>Kiedy rozpoczac budowe domu?</p>
                <p>Jak dlugo trwa remont/budowa domu?</p>
            </div>
        </StyledHomeFaq>
    )
};

const StyledHomeFaq = styled.div`
    min-height: 80vh;
    padding: 4em;
    h1 {
        margin-bottom: 1em;
    }
    div {
        height: 60vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            border-bottom: 1px solid #282828;
            padding: 1em 0;
            
        }
    }
`;

export default HomeFaqSection;