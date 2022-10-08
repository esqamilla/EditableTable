export type RowDataType = 'level' | 'row'

export interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number | null; // Количество
  unitPrice: number | null; // Цена за ед.
  price: number; // Стоимость

  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: RowDataType;
}

export interface RowData extends NewRowData {
  id: number;
  key?: number;
}

export interface SaveRowReturn {
  current: RowData;
  changed: RowData[];
}

export interface CreateTableRowArgs {
  type: RowDataType,
  parent: RowData["parent"]
}