import ColorModeContextProvider from './contexts/ColorModeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ColorModeContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </ColorModeContextProvider>
  );
}

export default App;
