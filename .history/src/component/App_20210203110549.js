import './App.css';

function App() {
  const debounce = (fn) => {
    let timer = null;
    return function () {
      timer = setTimeout(() => {
        fn();
      }, 200);
      clearTimeout(timer);
    };
  };
  return (
    <div className="App">
      <input
        onChange={debounce(() => {
          console.log(111);
        })}
      />
    </div>
  );
}

export default App;
