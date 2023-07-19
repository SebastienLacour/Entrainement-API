import './App.css';
import { Routes, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Damages from './components/Damages/Damages';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';

function App() {

  const equipement = ["armes", "sorts", "armures", "talismans"]
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/statistiques' element={<Stats/>}/>
        <Route path='/dégâts' element={<Damages/>}/>
        <Route path='/classes' element={<ItemList url="http://localhost:3000/api/classes/" title="classes"/>}/>
        <Route path='/classes/:id' element={<Item url="http://localhost:3000/api/classes/" back="/classes"/>}/>
        <Route path='/equipements' element={<ItemList url="" data={equipement} title="équipements"/>}/>
      </Routes>
    </div>
  );
}

export default App;
