import { Layout } from "antd";
import TableEditable from "components/EditableTable/EditableTable";
import React, { FC } from "react";
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
