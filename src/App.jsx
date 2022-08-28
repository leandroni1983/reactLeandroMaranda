
import './App.css';
import Item from './components/ItemList/Item';
import Navbar from './components/Nabvar/Nabvar';
function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='padre' id='light'>
        <Item />
      </div>

    </ >
  );
}

export default App;
