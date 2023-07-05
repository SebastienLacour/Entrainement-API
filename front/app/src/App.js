import './App.css';
import { Routes, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Damages from './components/Damages/Damages';
import ItemList from './components/ItemList/ItemList';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/statistiques' element={<Stats/>}/>
        <Route path='/dégâts' element={<Damages/>}/>
        <Route path='/classes' element={<ItemList url="http://localhost:3000/api/classes/" title="classes"/>}/>
      </Routes>
    </div>
  );
}

export default App;
