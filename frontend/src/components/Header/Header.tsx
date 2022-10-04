import {Button, Layout, Space} from "antd";
import React, {FC, ReactNode} from 'react';
import Menu from "../../components/Menu/Menu";
import {BackIcon, SettingsIcon} from "../../components/Icons/Icons";
import style from "./Header.module.scss";

interface HeaderProps {
}

const { Header: HeaderAntd } = Layout;

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <HeaderAntd className={style.header}>
        <Space>
          <Button type={"link"} icon={<SettingsIcon />} />
          <Button type={"link"} icon={<BackIcon />} />
        </Space>
        <Menu />
      </HeaderAntd>
    </div>
  );
};

export default Header;