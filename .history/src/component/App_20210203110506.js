import './App.css';

function App() {
  const debounce = () => {
    let timer = null;
    return function () {
      timer = setTimeout(() => {}, 200);
      clearTimeout(timer);
    };
  };
  return (
    <div className="App">
      <input />
    </div>
  );
}

export default App;
