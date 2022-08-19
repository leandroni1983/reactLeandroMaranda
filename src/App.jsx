import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Nabvar/Nabvar';
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Hola React' />
    </>
  );
}

export default App;
