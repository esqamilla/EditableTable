import {Layout} from "antd";
import React, {FC} from 'react';
import TableDnd from "../TableDnd/TableDnd";
import ContentBlockHeader from "../ContentBlock/ContentBlockHeader";
import style from "./ContentBlock.module.scss";

interface ContentBlockProps {}

const { Content } = Layout;

const ContentBlock: FC<ContentBlockProps> = ({}) => {
  return (
    <Content className={style.content}>
      <ContentBlockHeader />

      <TableDnd />
    </Content>
  );
};

export default ContentBlock;