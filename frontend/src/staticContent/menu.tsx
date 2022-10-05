import {Space, Typography} from "antd";
import React from "react";
import {MenuBoxesIcon} from "../components/Icons/Icons";
import type { MenuProps } from 'antd';
import sideBarStyles from "../components/SideBar/SideBar.module.scss";

const { Text } = Typography

type MenuItem = Required<MenuProps>['items'][number];

export const sideBarMenuItems: MenuItem[] = [
  {
    label: (
      <Space direction="vertical">
        <Text>Название проекта</Text>
        <Text className={sideBarStyles.subText}>Аббревиатура</Text>
      </Space>
    ),
    key: "sub1",
    children: [
      {
        label: "По проекту",
        icon: <MenuBoxesIcon />,
        key: "1",
      },
      {
        label: "Объекты",
        icon: <MenuBoxesIcon />,
        key: "2",
      },
      {
        label: "РД",
        icon: <MenuBoxesIcon />,
        key: "3",
      },
      {
        label: "МТО",
        icon: <MenuBoxesIcon />,
        key: "4",
      },
      {
        label: "СМР",
        icon: <MenuBoxesIcon />,
        key: "5",
      },
      {
        label: "График",
        icon: <MenuBoxesIcon />,
        key: "6",
      },
      {
        label: "МиМ",
        icon: <MenuBoxesIcon />,
        key: "7",
      },
      {
        label: "Рабочие",
        icon: <MenuBoxesIcon />,
        key: "8",
      },
      {
        label: "Капвложения",
        icon: <MenuBoxesIcon />,
        key: "9",
      },
      {
        label: "Бюджет",
        icon: <MenuBoxesIcon />,
        key: "10",
      },
      {
        label: "Финансирование",
        icon: <MenuBoxesIcon />,
        key: "11",
      },
      {
        label: "Панорамы",
        icon: <MenuBoxesIcon />,
        key: "12",
      },
      {
        label: "Камеры",
        icon: <MenuBoxesIcon />,
        key: "13",
      },
      {
        label: "Поручения",
        icon: <MenuBoxesIcon />,
        key: "14",
      },
      {
        label: "Контрагенты",
        icon: <MenuBoxesIcon />,
        key: "15",
      },
    ]
  }
]