import './App.css';

function App() {
  const debounce = () => {
    const timer = null;
    return function () {
      setTimeout(() => {}, 200);
    };
  };
  return (
    <div className="App">
      <input />
    </div>
  );
}

export default App;
