// 鼠标跟随

import {useEffect, useState} from 'react';
const useMouse=()=>{
    const [target,setTarget]=useState({
        x:0,y:0
    });
    const {x,y}=target;
    useEffect(()=>{
        document.addEventListener('mousemove',(e)=>{
           console.log(e.clientX,e.clientY,'------dsad') 
           setTarget({
               x:e.clientX,
               y:e.clientY
           })
        });
        return ()=>{
            document.removeEventListener('mousemove')
        }
    },[])
    return [x,y]
}
export default useMouse