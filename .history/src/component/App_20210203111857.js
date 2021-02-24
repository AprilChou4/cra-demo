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
    let timer = null;

    return function () {
      if (ate.now() - prev >= wait) {
        fn();
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
        }, 200)}
      />
    </div>
  );
}

export default App;
