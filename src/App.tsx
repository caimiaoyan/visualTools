import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Routes, Route } from "react-router-dom";
import Index from './pages/';
import Preview from './pages/preview';
import Dynamic from './pages/dynamic';
import './base.scss';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Routes>
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </ConfigProvider>

  );
}

export default App;
