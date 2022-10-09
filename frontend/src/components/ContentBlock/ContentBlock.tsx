import { Layout } from "antd";
import React, { FC } from "react";
import TableEditable from "../TableDnd/TableEditable";
import style from "./ContentBlock.module.scss";
import ContentBlockHeader from "./ContentBlockHeader";

interface ContentBlockProps {}

const { Content } = Layout;

const ContentBlock: FC<ContentBlockProps> = ({}) => {
  return (
    <Content className={style.content}>
      <ContentBlockHeader />

      <TableEditable />
    </Content>
  );
};

export default ContentBlock;
