import React, {FC} from 'react';
import {GetColumnsProps} from "../getColumns";
import concatClasses from "../../../utils/concatClasses";
import {RowData, RowDataType} from "../../../types/table";
import style from "../TableDnd.module.scss";

import rootLevelIconSrc from '../../../icons/level-1.svg';
import subLevelIconSrc from '../../../icons/level-2.svg';
import rowIconSrc from '../../../icons/row.svg';

interface IconsByTypeProps {
  id: number;
  type: RowData["type"];
  parent: RowData["parent"];
  createTableRow: GetColumnsProps["createTableRow"];
  lengthFromParent: number;
  rowFromFirstLevel: boolean;
}

const IconsByType: FC<IconsByTypeProps> = ({id, rowFromFirstLevel, parent, type, createTableRow, lengthFromParent}) => {
  if (parent === null) {
    return (
      <div className={concatClasses(style.icon, style.icon_root_level)}>
        <img
          src={rootLevelIconSrc}
          alt={"Уровень 1"}
          onClick={() => {
            createTableRow({
              type: "level",
              parent,
            })
          }} />
        <div className={style.icon_additional_btns}>
          <img src={subLevelIconSrc} alt={"Уровень 2"} onClick={() => {
            createTableRow({
              type: "level",
              parent: id,
            })
          }} />
          <img src={rowIconSrc} alt={"Строка"} onClick={() => {
            createTableRow({
              type: "row",
              parent: id,
            })
          }} />
        </div>
      </div>
    )
  }

  if (type === "level") {
    return (
      <div className={concatClasses(style.icon, style.icon_sub_level)}>
        <span style={{ height: `${60 * lengthFromParent}px` }} className={style.icon_helper}></span>
        <img src={subLevelIconSrc} alt={"Уровень 2"} onClick={() => {
          createTableRow({
            type: "level",
            parent,
          })
        }} />
        <div className={style.icon_additional_btns}>
          <img src={rowIconSrc} alt={"Строка"} onClick={() => {
            createTableRow({
              type: "row",
              parent: id,
            })
          }} />
        </div>
      </div>
    )
  }

  return (
    <div className={concatClasses(style.icon, style.icon_row, rowFromFirstLevel && style.icon_row_firstLevel)}>
      <span style={{ height: `${60 * lengthFromParent}px` }} className={style.icon_helper}></span>
      <img src={rowIconSrc} alt={"Строка"} onClick={() => {
        createTableRow({
          type: "row",
          parent
        })
      }} />
    </div>
  )
};

export default IconsByType;