import './App.css';
import { Routes, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Damages from './components/Damages/Damages';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/statistiques' element={<Stats/>}/>
        <Route path='dégâts' element={<Damages/>}/>
      </Routes>
    </div>
  );
}

export default App;
