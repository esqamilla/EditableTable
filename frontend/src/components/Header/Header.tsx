import { Button, Layout, Space } from "antd";
import HeaderProfile from "components/HeaderProfile/HeaderProfile";
import { BackIcon, SettingsIcon } from "components/Icons/Icons";
import Menu from "components/Menu/Menu";
import React, { FC } from "react";
import style from "./Header.module.scss";

interface HeaderProps {}

const { Header: HeaderAntd } = Layout;

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <HeaderAntd className={style.header}>
        <div className={style.wrapper}>
          <div className={style.wrapper_col}>
            <Space>
              <Button type={"link"} icon={<SettingsIcon />} />
              <Button type={"link"} icon={<BackIcon />} />
            </Space>
            <Menu />
          </div>
          <div className={style.wrapper_col}>
            <HeaderProfile />
          </div>
        </div>
      </HeaderAntd>
    </div>
  );
};

export default Header;
