import logo from './logo.svg';
import './App.css';

// JSX Example

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'JC',
  lastName: 'Coles'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

// Array method example

const users = [
  { id: 1, name: 'JC Coles' },
  { id: 2, name: 'Steven Coles' },
  { id: 3, name: 'Chase Coles' }
];

const userNames = users.map(user => user.name);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {element}
        </a>
        <div>
          {userNames}
        </div>
      </header>
    </div>
  );
}

export default App;
