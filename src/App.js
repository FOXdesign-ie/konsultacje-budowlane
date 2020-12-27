import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
// styles
import GlobalStyle from './components/GlobalStyle';
// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetails from './pages/ServiceDetails';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage/>
            </Route>
            <Route path='/services' exact>
              <ServicesPage/>
            </Route>
            <Route path='/uslugi/:id' >
              <ServiceDetails/>
            </Route>
            <Route path='/contact' exact>
              <ContactPage/>
            </Route>
        </Switch>
        </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
