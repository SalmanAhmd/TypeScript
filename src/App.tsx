import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Ocar from './components/Ocar';
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

      <Heading>Heading Text </Heading>
      <Ocar>
        <Heading>React Children </Heading>
      </Ocar>

      <Button handleClick={(e) => console.log('Clicked',e)} />
    </div>
  );
}

export default App;
