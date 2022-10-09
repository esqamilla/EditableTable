import { Form, Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import style from "components/EditableTable/EditableTable.module.scss";
import React, { FC, useContext, useEffect, useState } from "react";
import { tableData } from "testData/editableTable";
import { CreateTableRowArgs, RowData, SaveRowReturn } from "types/table";
import { findLastChildIndexByParent } from "utils/tableEdit";
import EditableCell from "./components/EditableCell";
import EditableRow, { EditableContext } from "./components/EditableRow";
import getColumns from "./getColumns";

interface EditableTableProps {}

const EditableTable: FC<EditableTableProps> = ({}) => {
  const form = useContext(EditableContext)!;
  const [editingKey, setEditingKey] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<RowData[]>([]);

  useEffect(() => {
    if (!tableData || !dataSource.length || !tableData.length) {
      createTableRow({ type: "level", parent: null });
    } else {
      setDataSource(
        tableData.map((row) => ({
          ...row,
          price: (row.unitPrice ?? 0) * (row.quantity ?? 0),
        }))
      );
    }
  }, []);

  const createTableRow = ({ type, parent }: CreateTableRowArgs) => {
    const index = Math.max(...dataSource.map((v) => v.id), 0) + 1;
    const newRow: RowData = {
      type,
      parent,
      id: index,
      key: index,
      quantity: null,
      price: 0,
      unitPrice: null,
      unit: null,
      title: "",
    };

    if (!!parent) {
      const tableData = [...dataSource];

      tableData.splice(
        findLastChildIndexByParent(dataSource, parent) + 1,
        0,
        newRow
      );
      setDataSource(tableData);
    } else {
      setDataSource([...dataSource, newRow]);
    }

    setDisabled(true);
    setEditingKey(index);
  };

  // функция для сохранения созданной или измененной строки
  const saveTableRow = (row: RowData, storage: RowData[]): SaveRowReturn => {
    const newData = [...storage];
    const index = newData.findIndex((v) => v.id === row.id);
    newData.splice(index, 1, row);

    setDataSource(newData);
    return {
      current: row,
      changed: recalculation(row.parent, newData),
    };
  };

  const recalculation = (parentID: RowData["parent"], storage: RowData[]) => {
    const rows = [...storage];
    const changedRows: RowData[] = [];

    if (parentID == null) return changedRows;
    let currentParentIndex = rows.findIndex((v) => v.id === parentID);
    if (currentParentIndex === -1) return changedRows;
    let currentParent = rows[currentParentIndex];

    do {
      const children = rows.filter((v) => v.parent == currentParent.id);
      const newPrice = children.reduce((acc, v) => acc + v.price, 0);

      if (currentParent.price === newPrice) break;

      rows[currentParentIndex].price = newPrice;
      changedRows.push(rows[currentParentIndex]);

      currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent);
    } while (currentParentIndex !== -1);

    return changedRows;
  };

  const isEditing = (record: RowData) => record.key === editingKey;

  const columns = getColumns({
    createTableRow,
    tableData: dataSource,
    disabled,
  }).map((col) => {
    return !col.editableLevel && !col.editableRow
      ? col
      : {
          ...col,
          onCell: (record: RowData) => ({
            record,
            editable:
              record.type === "level" ? col.editableLevel : col.editableRow,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: saveTableRow,
            editing: isEditing(record),
            setEditingKey: setEditingKey,
            disabled,
            setDisabled,
            dataSource,
          }),
        };
  });

  return (
    <Form form={form} component={false}>
      <Table
        className={style.table}
        pagination={false}
        scroll={{
          y: "calc(100vh - 88px - 47px)",
        }}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        dataSource={dataSource}
        /* todo: некорректно задан тип */
        columns={columns as (ColumnGroupType<RowData> | ColumnType<RowData>)[]}
      />
    </Form>
  );
};

export default EditableTable;
