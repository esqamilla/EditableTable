import {ColumnsType} from "antd/es/table";
import {NewRowData, RowData,} from "../types/table";

export const tableData: RowData[] = [
  {
    id: 1,
    key: 1,
    title: "Южная строительная площадка",
    unit: "",
    quantity: null,
    unitPrice: null,
    price: 0,
    parent: null,
    type: "level"
  },
  {
    id: 2,
    key: 2,
    title: "Фундаментальные работы",
    unit: "",
    quantity: null,
    unitPrice: null,
    price: 0,
    parent: 1,
    type: "level"
  },
  {
    id: 3,
    key: 3,
    title: "Статья работы № 1",
    unit: "м3",
    quantity: 1750,
    unitPrice: 108.07,
    price: 0,
    parent: 2,
    type: "row"
  },
  {
    id: 4,
    key: 4,
    title: "Статья работы № 2",
    unit: "л",
    quantity: 1200,
    unitPrice: 850,
    price: 0,
    parent: 2,
    type: "row"
  },
]