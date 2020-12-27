import AboutHeaderSection from '../components/AboutHeaderSection';
import AboutDetailsSection from '../components/AboutDetailsSection';

import {motion} from 'framer-motion';
import {pageAnimation} from '../animations';

const  AboutPage = () => {
    return (
        <motion.div    
            exit="exit"
            variants={pageAnimation}
            initial= "hidden"
            animate= "show" >
            <AboutHeaderSection/>
            <AboutDetailsSection />
        </motion.div>
    )
};

export default AboutPage;
