import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';
import './Main.css';

function Main() {

  const myMainMode = "light";  // To be modified using CONTEXT
  const myMainClassMode = `myMain myMain-${myMainMode}`;

  return (
    <main className={myMainClassMode}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/works/*' element={<Work/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </main>
  );
}

export default Main;

