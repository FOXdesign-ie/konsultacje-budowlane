import HomeHeaderSection from '../components/HomeHeaderSection';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeFaqSection from '../components/HomeFaqSection';

import {motion} from 'framer-motion';
import {pageAnimation} from '../animations';


const HomePage = () => {
    return (
        <motion.div    
            exit="exit"
            variants={pageAnimation}
            initial= "hidden"
            animate= "show" >
            <HomeHeaderSection />
            <HomeAboutSection/>
            <HomeFaqSection />
        </motion.div>
    )
};

export default HomePage;

