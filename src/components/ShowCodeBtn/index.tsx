import { useState, useEffect } from 'react';
import { message, Modal, Button } from 'antd';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons';
import AceEditor from 'react-ace';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAppSelector } from '../../app/hooks';
import { generateCode } from './generateCode';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-xcode';

var myWorker = new Worker('./worker.js');

export default function CodeBox() {
  const state = useAppSelector((state) => state.codeTree.present);
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    myWorker.onmessage = function (e) {
      setCode(e.data);
    };
  }, []);

  useEffect(() => {
    const code = generateCode(state);
    let result = `[{pageInfo:${JSON.stringify(state.pageInfo)},cpList:${code}}]`
    myWorker.postMessage(result);
    console.log('Message posted to worker');
  }, [state]);

  const downLoad = () => {
  };
  
  return (
    <>
      <Button onClick={() => setVisible(!visible)} type="text" style={{marginRight: 10}}>
        <div className='flex justify-center items-center'>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="ml-1">show json</span>
        </div>
      </Button>
      <Modal
        width="800px"
        onCancel={() => setVisible(false)}
        title="代码预览"
        footer={false}
        open={visible}
      >
        <AceEditor
          mode="javascript"
          theme="xcode"
          width="100%"
          height="560px"
          onChange={() => {}}
          value={code}
          name="code"
          showPrintMargin={false}
          fontSize={14}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            useWorker: false
          }}
        />
        <div className="flex justify-center border-t border-gray-200 pt-5">
          <CopyToClipboard
            text={code}
            onCopy={() => message.success('复制成功')}
          >
            <Button icon={<CopyOutlined />} className='mr-5'>
              复制
            </Button>
          </CopyToClipboard>
          <Button onClick={downLoad} type="primary" icon={<DownloadOutlined />}>
            下载
          </Button>
        </div>
      </Modal>
    </>
  );
}
