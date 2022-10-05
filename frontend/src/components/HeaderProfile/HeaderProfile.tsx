import {UserOutlined} from "@ant-design/icons";
import {Avatar, Dropdown, Menu, Space} from "antd";
import React, {FC} from 'react';
import {DawnIcon} from "../../components/Icons/Icons";
import style from './HeaderProfile.module.scss'

const srcUser = null //"https://joeschmoe.io/api/v1/random";

interface HeaderProfileProps {

}

const menu = (
  <Menu
    items={[
      {
        label: "Редактировать",
        key: 'edit',
      },
      {
        label: "Выйти",
        key: 'exit',
      },
    ]}
  />
);

const HeaderProfile: FC<HeaderProfileProps> = ({}) => {
  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Space className={style.space}>
          <Avatar icon={srcUser ? undefined : <UserOutlined />} src={srcUser} />
          Антон Петров
          <DawnIcon />
        </Space>
      </Dropdown>

    </>
  );
};

export default HeaderProfile;