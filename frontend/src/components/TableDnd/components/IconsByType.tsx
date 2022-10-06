import React, {FC} from 'react';
import {GetColumnsProps} from "../getColumns";
import concatClasses from "../../../utils/concatClasses";
import {RowData, RowDataType} from "../../../types/table";
import style from "../TableDnd.module.scss";

import rootLevelIconSrc from '../../../icons/level-1.svg';
import subLevelIconSrc from '../../../icons/level-2.svg';
import rowIconSrc from '../../../icons/row.svg';

interface IconsByTypeProps {
  type: RowData["type"];
  parent: RowData["parent"];
  onSaveRow: GetColumnsProps["onSaveRow"];
}

const IconsByType: FC<IconsByTypeProps> = ({parent, type, onSaveRow}) => {
  if (parent === null) {
    return (
      <div className={concatClasses(style.icon, style.icon_root_level)}>
        <img src={rootLevelIconSrc} alt={"Уровень 1"} />
        <div className={style.icon_additional_btns}>
          <img src={subLevelIconSrc} alt={"Уровень 2"} />
          <img src={rowIconSrc} alt={"Строка"} />
        </div>
      </div>
    )
  }

  if (type === "level") {
    return (
      <div className={concatClasses(style.icon, style.icon_sub_level)}>
        <img src={subLevelIconSrc} alt={"Уровень 2"} />
        <div className={style.icon_additional_btns}>
          <img src={rowIconSrc} alt={"Строка"} onClick={onSaveRow} />
        </div>
      </div>
    )
  }

  return (
    <div className={concatClasses(style.icon, style.icon_row)}>
      <img src={rowIconSrc} alt={"Строка"} />
    </div>
  )
};

export default IconsByType;