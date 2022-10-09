import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { CreateTableRowArgs, RowData } from "types/table";
import { toMoney, toNumberWithSpaces } from "utils/moneyHelper";
import { hiddenTextWithTooltip } from "utils/textHelper";
import IconsByType from "./components/IconsByType";

export interface GetColumnsProps {
  createTableRow: (args: CreateTableRowArgs) => void;
  tableData: RowData[];
  disabled: boolean;
}

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
type TableColType = (ColumnTypes[number] & {
  editableLevel?: boolean;
  editableRow?: boolean;
  dataIndex: string;
})[];

const getColumns = ({
  createTableRow,
  tableData,
  disabled,
}: GetColumnsProps): TableColType => {
  const columns: ColumnsType<RowData> & {
    editableLevel?: boolean;
    editableRow?: boolean;
  } = [
    {
      title: "Уровень",
      dataIndex: "type",
      width: 110,
      render: (_, { type, parent, id }) => {
        const lengthFromParent =
          tableData.findIndex((row) => row.id === id) -
          tableData.findIndex((row) => row.id === parent);
        const rowFromFirstLevel = !tableData.find((row) => row.id === parent)
          ?.parent;

        return (
          <IconsByType
            id={id}
            type={type}
            parent={parent}
            disabled={disabled}
            rowFromFirstLevel={rowFromFirstLevel}
            lengthFromParent={lengthFromParent}
            createTableRow={createTableRow}
          />
        );
      },
    },
    {
      title: "Наименование работ",
      dataIndex: "title",
      editableLevel: true,
      editableRow: true,
      render: hiddenTextWithTooltip,
    },
    {
      title: "Ед. изм.",
      width: 200,
      dataIndex: "unit",
      editableLevel: false,
      editableRow: true,
    },
    {
      title: "Количество",
      width: 200,
      dataIndex: "quantity",
      editableLevel: false,
      editableRow: true,
      render: (quantity) => quantity && toNumberWithSpaces(quantity),
    },
    {
      title: "Цена за ед.",
      width: 200,
      dataIndex: "unitPrice",
      editableLevel: false,
      editableRow: true,
      render: (unitPrice) => unitPrice && toMoney(unitPrice),
    },
    {
      title: "Стоимость",
      width: 200,
      dataIndex: "price",
      render: (price) => toMoney(price),
    },
  ];

  // todo: некорректно задан тип
  return columns as TableColType;
};

export default getColumns;
