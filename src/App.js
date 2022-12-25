import logo from './logo.svg';
import './App.css';
import Todo from './components/home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='p-4'>

     <Todo />
      </div>
    </div>
  );
}

export default App;
