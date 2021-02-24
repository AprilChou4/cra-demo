import './App.css';

function App() {
  const arr = [1];
  const data = {
    aaa: '111',
    bbb: 2,
    ccc: 3,
    ddd: 5,
    eee: 6,
    fff: 77777,
    ggggg: 88888,
    sssssssss: 232,
  };
  return (
    <div className="App">
      <header className="App-header">
        <p ccc={data} ddd={arr}>
          Edit <code>src/App.js</code> and save to reload.{' '}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
