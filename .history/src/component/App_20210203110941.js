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
      }, wait);
    };
  };
  return (
    <div className="App">
      <input
        onChange={debounce(() => {
          console.log(111);
        }, 2000)}
      />
    </div>
  );
}

export default App;
