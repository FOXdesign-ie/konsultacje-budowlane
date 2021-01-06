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
                            <p>Jakie pozwolenia i formalności urzędowe należy dopełnić, aby uzyskać pozwolenie na budowę domu?</p>
                            <p>Jest to dość czasochłonny proces, który niewątpliwie powinien rozpocząć się od zakupu działki budowlanej. Przed rozpoczęciem budowy musimy uzyskać wiele dokumentów, m.in, wypis z planu miejscowego, mapę zasadniczą do celów projektowych,
                                oświadczenie o możliwości przyłączenia do poszczególnych sieci, decyzję o warunkach zabudowy, projekt budowalny, pozwolenie na budowę, zawiadomienie po rozoczęciu robót budowlanych itp. Więcej o tym jakie dokładnie formalności budowlane należy załatwić możecie przeczytać 
                                <a href='https://muratordom.pl/prawo/formalnosci-budowlane/budowa-domu-formalnosci-przed-budowa-krok-po-kroku-aa-wwKE-uJ7S-ebWp.html' target='blank'> KLIKAJĄC TUTAJ.</a></p>  
                                <p>Skontaktuj się z nami jeżeli masz dodatkowe pytania, jesteśmy po to, aby Wam pomóc i podzielić się naszą wiedzą.</p>  
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Jakie są koszty związane z budową domu?'>
                        <div className='answer'>
                            <p>Koszty związane z budową domu w dużej mierze zależą od tego jaki dom chcemy wybudować i z jakich materiałów korzystać.</p>
                            <p>W planie finansowych budowy domu na pewno musimy uwzględnić kwoty potrzebne m.in. na badanie geotechniczne gruntu (około 1,500zł), projekt domu (ceny od 3,000 do 15,000zł), usługi geodety (około 1,000zł). Koszty przyłącza wodociagowego i elektrycznego są zależny od odległości działki od poszczególnych sieci. 
                                Dodatkowe koszty będziemy musieli uzwględnić, gdy planujemy urządzenie ogrodu, ogrodzenie działki, montaż bramy, ubezpiecznie budowy, nadzór nad budową, materiały budowlane, czas pracy osób zaangażowanych w budowę naszego domu.
                                Więcej na temat kosztów związanych z budową domu możecie przeczytać <a href='https://www.nieruchomosci-online.pl/porady/budowa-domu-krok-kroku-2861.html' target='blank'>KLIKAJĄC TUTAJ.</a></p>   
                            <p>Przygotowaliśmy dla naszych klientów setki kosztorysów budowlanych, jesteśmy w stanie szybko oszacować ile będzie Ciebie kosztować Twój wymarzony dom.</p> 
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Kiedy rozpocząć budowę domu?'>
                        <div className='answer'>
                            <p>Im wcześniej zaczniesz tworzyć harmonogram budowy domu i zarezerwujesz terminy u wykonawców tym lepiej.</p>
                            <p>Prace budowlane związane z budową domu najlepiej rozpocząć wczesną wiosną. Mamy wówczas większe szanse na to, że stan surowy uda się zamknąć w tym samym roku, a następnie skupić się na wykończeniu nieruchomości. Na przełomie marca i kwietnia temperatura powietrza jest wyższa, dni są dłuższe, prace budowlane można rozpocząc wcześniej.
                                Więcej na ten temat możecie przeczytać <a href='https://www.dobredomy.pl/poradnik/budujemy-dom/kiedy-rozpoczac-budowe-domu/' target='blank'> KLIKAJĄC TUTAJ.</a>
                                 </p>    
                        </div>
                    </ToggleFAQ>

                    <ToggleFAQ title='Jak długo trwa remont/budowa domu?'>
                        <div className='answer'>
                            <p>Czas potrzebny na budowę domu zależy od kilku czynników, czy zaczynamy pracę od stanu zerowego czy stanu surowego (dodatkowo, czy jest to stan surowy otwarty czy zamknięty)? Zależy to także od tego jak duży projekt należy wykonać, jaki mamy budżet i jakie zasoby.</p>
                            <p>Budowa domu może potrwać od kilu miesięcy do nawet 2 lat (budowa domu pod klucz, wykończenie ogrodu, itp). Wykonujemy harmonogram budowy, który uwzględnia każdy etap prac z terminami ich realizacji. Na podstawie tego harmonogramu sporządzamy kosztorys a także zamawiamy materiały budowlane. 
                                Więcej o harmonogramie budowy domu możecie przeczytać <a href='https://muratordom.pl/przed-budowa/organizacja-budowy/ile-trwa-budowa-domu-jednorodzinnego-harmonogram-etapy-budowy-krok-po-kroku-aa-28uT-ga7n-K1JZ.html' target='blank'> KLIKAJĄC TUTAJ.</a></p>    
                        </div>
                    </ToggleFAQ>
                </AnimateSharedLayout>
            </div>
        </StyledHomeFaq>
    )
};

const StyledHomeFaq = styled.div`
    /* min-height: 80vh; */
    padding: 4em 4em 6em 4em;
    width: 100%;
    @media (max-width: 800px) and (orientation: portrait) {
        padding: 2em 2em 4em 2em;
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
        }
    }
    div {
        min-height: 13vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 800px) and (orientation: portrait) {
            width: 100%;
            min-height: 10vh;
        }
        .answer p {
            color: #7f6921;
            @media (max-width: 800px) and (orientation: portrait) {
                font-size: 1vw;
            } 
          
        }
        .question {
            cursor: pointer;
            border-bottom: 1px solid #7f6921;
            padding: 1em 0;
            @media (max-width: 800px) and (orientation: portrait) {
               p {
                font-size: 3vw;
               } 
            } 
        }
    }
`;

export default HomeFaqSection;