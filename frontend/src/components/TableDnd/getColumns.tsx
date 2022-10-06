import {ColumnsType} from "antd/es/table";
import React, {FC} from 'react';
import IconsByType from "./components/IconsByType";
import style from "./TableDnd.module.scss";
import {NewRowData, RowData, SaveRowReturn} from "../../types/table";
import {toMoney, toNumberWithSpaces} from "../../utils/moneyHelper";

export interface GetColumnsProps {
  onSaveRow: () => void;
}

const getColumns = ({onSaveRow}: GetColumnsProps): ColumnsType<RowData> => {
  const columns: ColumnsType<RowData> = [
    {
      title: 'Уровень',
      dataIndex: 'type',
      width: 110,
      className: style.level,
      render: (_, { type, parent }) => <IconsByType type={type} parent={parent} onSaveRow={onSaveRow} />,
    },
    {
      title: 'Наименование работ',
      dataIndex: 'title',
    },
    {
      title: 'Ед. изм.',
      width: 200,
      dataIndex: 'unit',
    },
    {
      title: 'Количество',
      width: 200,
      dataIndex: 'quantity',
      render: (quantity) => toNumberWithSpaces(quantity || "")
    },
    {
      title: 'Цена за ед.',
      width: 200,
      dataIndex: 'unitPrice',
      render: (unitPrice) => unitPrice ? toMoney(unitPrice) : ""
    },
    {
      title: 'Стоимость',
      width: 200,
      dataIndex: 'price',
      render: (_, { quantity, unitPrice }) => toMoney((quantity || 0) * (unitPrice || 0))
    },
  ];

  return columns
}

export default getColumns;