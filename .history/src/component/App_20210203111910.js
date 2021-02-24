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
  const throttle = (fn, wait) => {
    const prev = Date.now();
    const timer = null;

    return function () {
      if (Date.now() - prev >= wait) {
        fn();
      }
      prev = Date.now();
    };
  };
  return (
    <div className="App">
      <input
        onChange={debounce(() => {
          console.log(111);
        }, 200)}
      />
    </div>
  );
}

export default App;
