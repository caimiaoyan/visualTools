import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import { transform as BabelTransform } from 'babel-standalone';

function Index() {

  const [code, setCode] = useState('加载中...');
  const transform = (code: string) => {
    const option = {
      presets: ['es2015', 'react', 'stage-1'],
    };
    return BabelTransform(code, option).code;
  };

  useEffect(() => {
    setTimeout(() => {
      //代码字符串
      const codeStr = `
      function(){
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
        
        return (
          <div id="container">
            <Example />
            <a href="/bar">bar</a>
            <br/>
            <br/>
            <Antd.Input placeholder="Basic usage" style={{width: '200px'}}/>
            <br/>
            <br/>
            <span onClick={e => alert("Hi2")}>click me2</span>
          </div>
        );
      }`;
      const _codeStr = `var TempComponent = (${codeStr})();`;
      const functionBody = `${transform(_codeStr)} return TempComponent`
      const scope = { React, Antd }
      const transformCode = (new Function(...Object.keys(scope), functionBody))(...Object.values(scope))
      setCode(transformCode)
    }, 1500)
  }, []);

  return (
    <div className="h-screen flex flex-col" style={{padding: '20px'}}>
      <div>{code}</div>
    </div>
  );
}
export default Index;
