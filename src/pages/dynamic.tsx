import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { transform as BabelTransform } from 'babel-standalone';
window.React = React;
function Index() {

  const [code, setCode] = useState('加载中...');


  // const transform = (code: string) => {
  //   const text: string = `
  //     () => {
  //       ${code}
  //     }
  //   `;
  //   const option = {
  //     presets: ['es2015', 'react', 'stage-1'],
  //   };
  //   let transformCode = BabelTransform(text, option).code;
  //   //过滤转换后的代码
  //   return transformCode
  //     .replace(/(\(function \(\) \{)[\r\n]/, '')
  //     .replace(/\}\)\;$/, '');
  // };
  const transform = (code: string) => {
    const option = {
      presets: ['es2015', 'react', 'stage-1'],
    };
    return BabelTransform(code, option).code;
  };

  //代码字符串
  const codeStr = `

  var Temp = (function(){
    function Example() {
      // 声明一个新的叫做 “count” 的 state 变量
      const [count, setCount] = React.useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me1
          </button>
        </div>
      );
    }
  
    console.log("我被执行了")
    
    return (
      <div id="container">
        <Example />
        <a href="/bar">bar</a>
        <br/>
        <span onClick={e => alert("Hi2")}>click me2</span>
      </div>
    );
  })()

  console.log(Temp)

    `;




  useEffect(() => {
    setTimeout(() => {
      const transformCode = (new Function(`${transform(codeStr)} return Temp`))()
      setCode(transformCode)
    }, 1500)
  }, []);

  return (
    <div className="h-screen flex flex-col" >
      <div>{code}</div>
    </div>
  );
}
export default Index;
