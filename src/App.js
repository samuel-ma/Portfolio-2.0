
import Social from "./components/Social";
import './styles/App.css';
import Pages from './Pages';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">

      <Nav />
      <Social /> 
      <div className='container'>
          <Pages />
      </div>    

    </div>
  );
}

export default App;