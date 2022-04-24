import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Greet messageCount={32} name='Salman' isLoggedIn />
      <Person name={{ first: 'Salman', last: 'Ahmed' }} />
    </div>
  );
}

export default App;
