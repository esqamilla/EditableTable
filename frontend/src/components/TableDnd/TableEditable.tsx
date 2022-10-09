import {Form, InputRef, Table} from "antd";
import React, {FC, Key, useContext, useEffect, useRef, useState} from 'react';
import EditableRow, {EditableContext} from "./components/EditableRow";
import EditableCell from "./components/EditableCell";
import {findLastChildIndexByParent} from "../../utils/tableEdit";
import getColumns from "./getColumns";
import {tableData} from "../../testData/tableDnd";
import {CreateTableRowArgs, NewRowData, RowData, SaveRowReturn} from "../../types/table";
import style from './TableDnd.module.scss'

interface TableDndProps {}

const TableEditable: FC<TableDndProps> = ({}) => {
  const form = useContext(EditableContext)!;
  const [dataSource, setDataSource] = useState<RowData[]>(tableData);
  const [editingKey, setEditingKey] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const createTableRow = ({type, parent}: CreateTableRowArgs) => {
    const index = Math.max(...dataSource.map((v) => v.id), 0) + 1;
    const newRow: RowData = {
      type,
      parent,
      id: index,
      key: index,
      quantity: 0,
      price: 0,
      unitPrice: 0,
      unit: "",
      title: index.toString()
    };

    if (!!parent) {
      const tableData = [...dataSource];

      tableData.splice(findLastChildIndexByParent(dataSource, parent) + 1, 0, newRow);
      setDataSource(tableData)
    } else {
      setDataSource([...dataSource, newRow])
    }
  }

  // функция для сохранения строки
  function saveRow(rowData: NewRowData, storage: RowData[]) {
    const index = Math.max(...storage.map((v) => v.id), 0) + 1
    const row: RowData = {id: index, key: index, ...rowData}

    const newStorage = [...storage, row]

    return {
      current: row,
      changed: recalculation(row.parent, newStorage)
    }
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

  const handleSave = (row: RowData) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  console.log("disabled", disabled);

  const isEditing = (record: RowData) => record.key === editingKey;

  const columns = getColumns({
      createTableRow,
      tableData: dataSource,
      disabled
    }).map(col => {
    return (!col.editableLevel && !col.editableRow) ? col : {
      ...col,
      onCell: (record: RowData) => ({
        record,
        editable: record.type === "level" ? col.editableLevel : col.editableRow,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        editing: isEditing(record),
        setEditingKey: setEditingKey,
        disabled,
        setDisabled
      }),
    };
  });

  console.log("columns", columns)

  return (
    <Form form={form} component={false}>
      <Table
        className={style.table}
        pagination={false}
        scroll={{
          y: "calc(100vh - 88px - 47px)"
        }}
        components={components}
        dataSource={dataSource}
        columns={columns as any}
      />
    </Form>
  );
};

export default TableEditable;