import React, { useState } from "react";
const Main = () => {
  const [state, setState] = useState({});
  window.addEventListener(
    "message",
    function (event) {
      // 监听父窗口发送过来的数据向服务器发送post请求

      var data = event.data;
      console.log(
        data,
        "----- 监听父窗口发送过来的数据----dsada----------------"
      );
      setState(data);
    },
    false
  );
  //   向父窗口发送消息
  function toParent() {
    window.parent.postMessage(
      { name: document.getElementById("message").value },
      "*"
    );
  }
  return (
    <div>
      <input
        id='message'
        value={state.king}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={toParent}>发送消息到父窗口</button>
    </div>
  );
};
export default Main;
