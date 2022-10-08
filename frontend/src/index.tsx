import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from "antd";
import rus from "antd/lib/locale/ru_RU";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={rus}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
