import {Layout} from "antd";
import React, {FC} from 'react';
import 'antd/dist/antd.css';
import './styles/common.scss'
import ContentBlock from "./components/ContentBlock/ContentBlock";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import style from './App.module.scss'

const App: FC = () => {
  return (
    <Layout className={style.main_layout}>
      <Header />
      <Layout>
        <SideBar />
        <ContentBlock />
      </Layout>
    </Layout>
  );
}

export default App;
