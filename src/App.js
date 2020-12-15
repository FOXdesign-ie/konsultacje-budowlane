import {Switch, Route} from 'react-router-dom';

// styles
import GlobalStyle from './components/GlobalStyle';
// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <AboutPage/>
          </Route>
          <Route path='/services' exact>
            <ServicesPage/>
          </Route>
          <Route path='/contact' exact>
            <ContactPage/>
          </Route>
      </Switch>

      
      <Footer/>
    </div>
  );
}

export default App;
