import {Button, Layout, Menu} from "antd";
import React, {FC, useState} from 'react';
import 'antd/dist/antd.css';
import './styles/common.scss'
import Header from "./components/Header/Header";
import style from './App.module.scss'

const { Sider, Content } = Layout;

const App: FC = () => {
  return (
    <Layout className={style.main_layout}>
      <Header />
      <Layout>
        <Sider className={style.sider}>Sider</Sider>
        <Content className={style.content}>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
