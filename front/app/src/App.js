import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background">
        <main>
          <h1>Ca marche</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
