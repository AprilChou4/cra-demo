import React from 'react'
import './style.css'
const Demo =()=>{
    return <div>
        <h3>行内元素---外层加 text-align:center</h3>
        <div className="m-state"><span>行内元素</span></div>
        <h3>块状元素</h3>
        <div className="m-block">
            <div class="m-blockItem">我是块状元素</div>
        </div>

        <h3>块状元素</h3>
        <div className="m-block1">
            <div class="m-blockItem1">我是块状元素</div>
        </div>
    </div>
}
export default Demo