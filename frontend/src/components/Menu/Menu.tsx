import React, {FC, useState} from 'react';
import {Menu as ManuAntd, MenuProps as MenuPropsAntd} from 'antd';
import style from './Menu.module.scss'

interface MenuProps {

}

const items: MenuPropsAntd['items'] = [
  {
    label: 'Просмотр',
    key: 'view',
  },
  {
    label: 'Управление',
    key: 'control',
  },
];

const Menu: FC<MenuProps> = ({}) => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuPropsAntd['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ManuAntd onClick={onClick} className={style.menu} defaultValue={"view"} selectedKeys={[current]} mode="horizontal" items={items} />
  );
};

export default Menu;