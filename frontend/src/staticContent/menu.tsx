import type { MenuProps } from "antd";
import { Space, Typography } from "antd";
import { MenuBoxesIcon } from "components/Icons/Icons";
import sideBarStyles from "components/SideBar/SideBar.module.scss";
import React from "react";

const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

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
    ],
  },
  {
    label: (
      <Space direction="vertical">
        <Text>Название проекта 1</Text>
        <Text className={sideBarStyles.subText}>Аббревиатура 1</Text>
      </Space>
    ),
    key: "sub2",
    children: [
      {
        label: "Тест отзывчивости сайта",
        icon: <MenuBoxesIcon />,
        key: "101",
      },
      {
        label: "Объекты",
        icon: <MenuBoxesIcon />,
        key: "102",
      },
      {
        label: "РД",
        icon: <MenuBoxesIcon />,
        key: "103",
      },
      {
        label: "МТО",
        icon: <MenuBoxesIcon />,
        key: "104",
      },
      {
        label: "СМР",
        icon: <MenuBoxesIcon />,
        key: "105",
      },
      {
        label: "График",
        icon: <MenuBoxesIcon />,
        key: "106",
      },
      {
        label: "МиМ",
        icon: <MenuBoxesIcon />,
        key: "107",
      },
      {
        label: "Рабочие",
        icon: <MenuBoxesIcon />,
        key: "108",
      },
      {
        label: "Капвложения",
        icon: <MenuBoxesIcon />,
        key: "109",
      },
      {
        label: "Бюджет",
        icon: <MenuBoxesIcon />,
        key: "1010",
      },
      {
        label: "Финансирование",
        icon: <MenuBoxesIcon />,
        key: "1011",
      },
      {
        label: "Панорамы",
        icon: <MenuBoxesIcon />,
        key: "1012",
      },
      {
        label: "Камеры",
        icon: <MenuBoxesIcon />,
        key: "1013",
      },
      {
        label: "Поручения",
        icon: <MenuBoxesIcon />,
        key: "1014",
      },
      {
        label: "Контрагенты",
        icon: <MenuBoxesIcon />,
        key: "1015",
      },
    ],
  },
];
