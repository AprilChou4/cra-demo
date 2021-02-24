/** eslint-disable */
import './App.css';

function App() {
  const debounce = (fn, wait) => {
    let timer = null;

    return function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      const context = this;
      const args = arguments;
      timer = setTimeout(() => {
        console.log(context, args, '-------context, args');
        fn.apply(context, args);
      }, wait);
    };
  };
  const throttle = (fn, wait) => {
    let prev = Date.now();

    return function () {
      if (Date.now() - prev >= wait) {
        fn();
        prev = Date.now();
      }
    };
  };
  const handle = (a) => {};
  return (
    <div className="App">
      <input onChange={(e) => debounce(handle(e), 2000)()} />
      <input
        onChange={throttle(() => {
          console.log(111);
        }, 2000)}
      />
    </div>
  );
}

export default App;
