import {Table} from "antd";
import React, {FC, useState} from 'react';
import getColumns from "./getColumns";
import {toMoney, toNumberWithSpaces} from "../../utils/moneyHelper";
import IconsByType from "./components/IconsByType";
import {tableData} from "../../testData/tableDnd";
import {NewRowData, RowData, SaveRowReturn} from "../../types/table";
import style from './TableDnd.module.scss'
import type { ColumnsType } from 'antd/es/table';

interface TableDndProps {}

const testRow: NewRowData = {
  type: "row",
  quantity: 100,
  price: 0,
  unitPrice: 100,
  unit: "м3",
  parent: 2,
  title: "Новая тестовая строка"
}

const TableDnd: FC<TableDndProps> = ({}) => {
  const [dataSource, setDataSource] = useState(tableData);

  // функция для сохранения строки
  function saveRow(rowData: NewRowData, storage: RowData[]) {
    const index = Math.max(...storage.map((v) => v.id), 0) + 1
    const row: RowData = {id: index, key: index, ...rowData}

    console.log("row", row)
    console.log("recalculation", recalculation(row.parent, storage))

    storage.push(row)
    return {
      current: row,
      changed: recalculation(row.parent, storage)
    }
  }

  const onHandleSaveRow = () => {
    setDataSource(saveRow(testRow, dataSource).changed)
  }

// функция для изменения строки
  const editRow = (row: RowData, storage: RowData[]): SaveRowReturn => {
    const index = storage.findIndex((v) => v.id === row.id)
    storage.splice(index, 1, row)

    return {
      current: row,
      changed: recalculation(row.parent, storage)
    }
  }

  function recalculation(parentID: number | null, storage: RowData[]) {
    const rows = [...storage]
    const changedRows: RowData[] = []

    if (parentID == null) return changedRows
    let currentParentIndex = rows.findIndex((v) => v.id === parentID)
    if (currentParentIndex === -1) return changedRows
    let currentParent = rows[currentParentIndex]

    do {
      const children = rows.filter((v) => v.parent == currentParent.id)
      const newPrice = children.reduce((acc, v) => acc + v.price, 0)
      if (currentParent.price === newPrice) break

      rows[currentParentIndex].price = newPrice
      changedRows.push(rows[currentParentIndex])

      currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent)
    } while (currentParentIndex !== -1)

    return changedRows
  }

  console.log(style)
  return (
    <Table
      className={style.table}
      pagination={false}
      dataSource={dataSource}
      columns={getColumns({onSaveRow: onHandleSaveRow})}
    />
  );
};

export default TableDnd;