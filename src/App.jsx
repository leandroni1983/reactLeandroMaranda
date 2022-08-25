import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemCountCustomHook from './components/ItemCount/ItemCountCustomHook';
import Navbar from './components/Nabvar/Nabvar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className='padre'>
        <ItemCount nombre='cosa' stock={10} initial={1} />
        <ItemCountCustomHook nombre='cosa' stock={20} initial={1} />
      </body>

    </>
  );
}

export default App;
