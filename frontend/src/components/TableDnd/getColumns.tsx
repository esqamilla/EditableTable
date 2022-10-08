import {Button, Popconfirm, Table, Typography} from "antd";
import {ColumnsType} from "antd/es/table";
import React, {FC, Key} from 'react';
import IconsByType from "./components/IconsByType";
import style from "./TableDnd.module.scss";
import {CreateTableRowArgs, NewRowData, RowData, SaveRowReturn} from "../../types/table";
import {toMoney, toNumberWithSpaces} from "../../utils/moneyHelper";

export interface GetColumnsProps {
  createTableRow: (args: CreateTableRowArgs) => void;
  tableData: RowData[];
}

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const getColumns = ({createTableRow, tableData}: GetColumnsProps): (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] => {
  const columns: ColumnsType<RowData> & { editable?: boolean } = [
    {
      key: 'Уровень',
      title: 'Уровень',
      dataIndex: 'type',
      width: 110,
      render: (_, { type, parent, id }) => {
        const lengthFromParent = tableData.findIndex(row => row.id === id) - tableData.findIndex(row => row.id === parent);
        const rowFromFirstLevel = !tableData.find(row => row.id === parent)?.parent;

        return (
          <IconsByType
            id={id}
            type={type}
            parent={parent}
            rowFromFirstLevel={rowFromFirstLevel}
            lengthFromParent={lengthFromParent}
            createTableRow={createTableRow}
          />
        )
      },
    },
    {
      key: 'Наименование работ',
      title: 'Наименование работ',
      dataIndex: 'title',
      editable: true,
      onCell: (record) => ({
        onDoubleClick: () => {}}
      )
    },
    {
      key: 'Ед. изм.',
      title: 'Ед. изм.',
      width: 200,
      dataIndex: 'unit',
      editable: true,
      onCell: (record) => ({
        onDoubleClick: () => {}
      })
    },
    {
      key: 'Количество',
      title: 'Количество',
      width: 200,
      dataIndex: 'quantity',
      editable: true,
      onCell: (record) => ({
        onDoubleClick: () => {}
      }),
      render: (quantity) => toNumberWithSpaces(quantity || "")
    },
    {
      key: 'Цена за ед.',
      title: 'Цена за ед.',
      width: 200,
      dataIndex: 'unitPrice',
      editable: true,
      onCell: (record) => ({
        onDoubleClick: () => {}
      }),
      render: (unitPrice) => unitPrice ? toMoney(unitPrice) : ""
    },
    {
      key: 'Стоимость',
      title: 'Стоимость',
      width: 200,
      dataIndex: 'price',
      render: (_, { quantity, unitPrice }) => toMoney((quantity || 0) * (unitPrice || 0))
    },
  ];

  return columns as any
}

export default getColumns;