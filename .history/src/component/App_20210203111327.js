import './App.css';

function App() {
  const debounce = (fn, wait) => {
    let timer = null;
    let c = 1;
    console.log(c, '-----wait');
    return function () {
      c += 1;
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
        }, 200)}
      />
    </div>
  );
}

export default App;
