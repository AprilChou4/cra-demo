// 父文件
import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({});
  const sendPost = () => {
    // 获取id为otherPage的iframe窗口对象

    var iframeWin = document.getElementById("otherPage").contentWindow;
    // 向该窗口发送消息
    iframeWin.postMessage(
      { king: document.getElementById("message").value },
      "*"
    );
  };

  // 监听跨域请求的返回
  window.addEventListener(
    "message",
    function (event) {
      console.log(event, event.data, "-----dasdasdasd-------------");
      setState(event.data, "---");
    },
    false
  );
  return (
    <div>
      <input
        id='message'
        value={state.name}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={sendPost}>发送消息到子窗口</button>
      <iframe
        src='http://192.168.8.168:3000/'
        width='500'
        height='500'
        title='ifram'
        id='otherPage'
      ></iframe>
    </div>
  );
}

export default App;
