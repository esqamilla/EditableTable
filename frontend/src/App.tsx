import { Layout } from "antd";
import "antd/dist/antd.css";
import ContentBlock from "components/ContentBlock/ContentBlock";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import React, { FC } from "react";
import "styles/common.scss";
import style from "./App.module.scss";

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
};

export default App;
