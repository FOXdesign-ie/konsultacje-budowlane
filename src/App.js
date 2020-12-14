// styles
import GlobalStyle from './components/GlobalStyle';
// pages
import HomePage from './pages/HomePage';

// components
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
