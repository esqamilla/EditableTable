import {Layout, Menu} from "antd";
import React, {FC, useState} from 'react';
import type { MenuProps } from 'antd';
import {sideBarMenuItems} from "../../staticContent/menu";
import style from "./SideBar.module.scss";

interface SideBarProps {}

const { Sider } = Layout;
const rootSubmenuKeys = ['sub1'];

const SideBar: FC<SideBarProps> = ({}) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider width={234} className={style.sider}>
      <Menu
        className={style.menu}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={sideBarMenuItems}
      />
    </Sider>
  );
};

export default SideBar;