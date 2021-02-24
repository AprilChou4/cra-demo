import './App.css';

function App() {
  const debounce = (fn, wait) => {
    let timer = null;
    return function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn();
      }, 2000);
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
