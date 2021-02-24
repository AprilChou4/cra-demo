/* eslint-disable */
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

  obj.myFun.call(db, '成都', '上海'); // 德玛 年龄 99  来自 成都去往上海
  obj.myFun.apply(db, ['成都', '上海']); // 德玛 年龄 99  来自 成都去往上海
  obj.myFun.bind(db, '成都', '上海')(); // 德玛 年龄 99  来自 成都去往上海
  obj.myFun.bind(db, ['成都', '上海'])(); // 德玛 年龄 99  来自 成都, 上海去往 undefined
  return (
    <div className="App">
      <input onChange={(e) => debounce(() => handle(e), 2000)()} />
      <input
        onChange={throttle(() => {
          console.log(111);
        }, 2000)}
      />
    </div>
  );
}

export default App;
