import {useState} from 'react';
import {motion} from 'framer-motion';

const ToggleFAQ = ({children, title}) => {
    const [toggle, setToggle] = useState(false);

    return(
        <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
            <motion.p layout>{title}</motion.p>
            {toggle ? children : ""}
        </motion.div>
    )
};

export default ToggleFAQ;