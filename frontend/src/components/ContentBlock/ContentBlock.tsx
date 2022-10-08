import {Layout} from "antd";
import React, {FC} from 'react';
import TableEditable from "../TableDnd/TableEditable";
import ContentBlockHeader from "../ContentBlock/ContentBlockHeader";
import style from "./ContentBlock.module.scss";

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