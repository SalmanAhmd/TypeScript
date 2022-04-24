import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <Greet messageCount={32} name='Salman' isLoggedIn />
      <Person name={{ first: 'Salman', last: 'Ahmed' }} />
      <PersonList names={[{ first: 'Salman', last: 'Ahmed' }, { first: 'Kamaal', last: 'Malik' }]} />

      <Status status='loading' />
    </div>
  );
}

export default App;
