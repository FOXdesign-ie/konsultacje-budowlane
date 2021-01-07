import {useState, useEffect} from 'react';

import styled from 'styled-components';
// useHistory gives us info about where we are (url, location, pathname, etc). We can compare if added url is the same as we have in ServiceData file
import {useHistory} from 'react-router-dom';
// service data
import {ServicesData} from '../ServicesData';

import {motion} from 'framer-motion';
import {pageAnimation, imgAnimation, fade, lineAnimation} from '../animations';


// Award component
const Description = ({title, description}) => {
    return (
        <StyledDescription>
            <motion.h2 variants={fade}>{title}</motion.h2>
            <motion.div variants={lineAnimation} className='line'></motion.div>
            <p>{description}</p>
        </StyledDescription>
    )
}

const ServiceDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [services, setServices] = useState(ServicesData);
    const [service, setService] = useState(null);

    useEffect(() => {
        const currentService = services.filter((service) => service.url === url);
        setService(currentService[0]);
    }, [services, url]); //dependencies, we want to execute this code always when services or url is updated

    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial= "hidden"
            animate= "show" >
        {service && (
             <StyledServiceDetails>
                <StyledServiceHeader>
                    <motion.h2 variants={fade}>{service.title}</motion.h2>
                    <motion.img  variants={imgAnimation} src={service.mainImg} alt='img' />
                </StyledServiceHeader>
                <StyledServiceDescriptions>
                    {service.descriptions.map((description) => (
                        <Description 
                            title={description.title} 
                            description={description.description}
                            key={description.title} />
                    ))}
                </StyledServiceDescriptions>
                <StyledImageDisplay>
                    <motion.img  variants={imgAnimation}src={service.secondaryImg} alt='img'/>
                </StyledImageDisplay>
            </StyledServiceDetails>
         )}
        </motion.div>
    )
};

const StyledServiceDetails = styled.div`
    color: #fff;
`;

const StyledServiceHeader = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    overflow: hidden;
    @media (max-width: 800px) and (orientation: portrait){
        text-align: center;
        position: inline-block;
        min-height: 20vh;
        padding-top: 12vh;
    }
    @media screen and (max-width: 770px) and (orientation: landscape) {
        padding-top: 20vh;
    }
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        text-transform: uppercase;
        letter-spacing: 0.3em;
        @media (max-width: 1500px) {
            font-size: 2rem;
        }
        @media (max-width: 600px) {
            top: 13%;
            font-size: 3vh;
        }
        @media screen and (max-width: 770px) and (orientation: landscape) {
            top: 10%;
            width: 80%;
            text-align: center;
            font-size: 6vh;
        }
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        margin: 1.5em 0;
        @media (max-width: 800px) and (orientation: portrait) {
            height: 20vh;
        }
    }
`;

const StyledServiceDescriptions = styled.div` 
    min-height: 60vh;
    margin: 1rem 5rem;
    @media (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
    }
    @media (max-width: 800px) and (orientation: portrait) {
        min-height: 10vh;
        margin: 0em;
    }
    @media screen and (max-width: 770px) and (orientation: landscape) {
        min-height: 10vh;
        margin: 0;
    }
`;

const StyledDescription = styled.div`
    padding: 3rem;
    h2 {
        text-transform: uppercase;
        @media (max-width: 600px) {
           font-size: 2vh;
        }
    }
    @media (max-width: 800px) and (orientation: portrait) {
        padding: 1em 2em;
    }
    @media screen and (max-width: 770px) and (orientation: landscape) {
        padding: 1em 2em;
    }
    .line {
        width: 70%;
        background: #7f6921;
        height: 0.2rem;
        margin: 1rem 0rem;
        @media (max-width: 600px) {
            height: 0.08rem;
            margin: 0.2rem 0rem;
        }
        @media screen and (max-width: 770px) and (orientation: landscape) {
            height: 0.08rem;
        }
    }
    p {
        padding: 1rem 0rem;
        @media (max-width: 800px) and (orientation: portrait) {
            font-size: 3.3vw;
            line-height: 2em;
        }
        @media screen and (max-width: 770px) and (orientation: landscape) {
            font-size: 4vh;
            
        }
    }
`;

const StyledImageDisplay = styled.div`
    min-height: 40vh;
    overflow: hidden;
    @media (max-width: 800px) and (orientation: portrait) {
        min-height: 20vh;
        }
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        @media (max-width: 800px) and (orientation: portrait) {
            height: 20vh;
        }
    }
`;

export default ServiceDetails;