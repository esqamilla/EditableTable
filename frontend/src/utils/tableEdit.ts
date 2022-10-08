import {RowData} from "../types/table";

export const findLastChildIndexByParent = (data: RowData[], parent: RowData["parent"]): number => {
  let nextParent: number | null = -1;

  const lastChildIndex = data.find(row => row.parent === parent)
    ? Math.max(
      ...Object.entries(data)
        .filter(i => i[1].parent === parent)
        .map(i => {
          nextParent = i[1].id
          return Number(i[0])
        })
    )
    : data.findIndex((row) => row.id === parent);

  return !data.find(row => row.parent === nextParent) ? lastChildIndex : findLastChildIndexByParent(data, nextParent)
}