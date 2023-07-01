import './App.css';
import { Routes, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/statistiques' element={<Stats/>}/>
      </Routes>
    </div>
  );
}

export default App;
