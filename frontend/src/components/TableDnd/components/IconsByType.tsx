import rootLevelIconSrc from "icons/level-1.svg";
import subLevelIconSrc from "icons/level-2.svg";
import rowIconSrc from "icons/row.svg";
import React, { FC } from "react";
import { RowData } from "types/table";
import concatClasses from "utils/concatClasses";
import { GetColumnsProps } from "../getColumns";
import style from "../TableDnd.module.scss";

interface IconsByTypeProps {
  id: number;
  type: RowData["type"];
  parent: RowData["parent"];
  createTableRow: GetColumnsProps["createTableRow"];
  lengthFromParent: number;
  rowFromFirstLevel: boolean;
  disabled: boolean;
}

const IconsByType: FC<IconsByTypeProps> = ({
  id,
  disabled,
  rowFromFirstLevel,
  parent,
  type,
  createTableRow,
  lengthFromParent,
}) => {
  if (parent === null) {
    return (
      <div
        className={concatClasses(
          style.icon,
          style.icon_root_level,
          disabled && style.icon_disabled
        )}
      >
        <img
          src={rootLevelIconSrc}
          alt={"Уровень 1"}
          onClick={() => {
            !disabled &&
              createTableRow({
                type: "level",
                parent,
              });
          }}
        />
        <div className={style.icon_additional_btns}>
          <img
            src={subLevelIconSrc}
            alt={"Уровень 2"}
            onClick={() => {
              !disabled &&
                createTableRow({
                  type: "level",
                  parent: id,
                });
            }}
          />
          <img
            src={rowIconSrc}
            alt={"Строка"}
            onClick={() => {
              !disabled &&
                createTableRow({
                  type: "row",
                  parent: id,
                });
            }}
          />
        </div>
      </div>
    );
  }

  if (type === "level") {
    return (
      <div
        className={concatClasses(
          style.icon,
          style.icon_sub_level,
          disabled && style.icon_disabled
        )}
      >
        <span
          style={{ height: `${60 * lengthFromParent}px` }}
          className={style.icon_helper}
        ></span>
        <img
          src={subLevelIconSrc}
          alt={"Уровень 2"}
          onClick={() => {
            !disabled &&
              createTableRow({
                type: "level",
                parent,
              });
          }}
        />
        <div className={style.icon_additional_btns}>
          <img
            src={rowIconSrc}
            alt={"Строка"}
            onClick={() => {
              !disabled &&
                createTableRow({
                  type: "row",
                  parent: id,
                });
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={concatClasses(
        style.icon,
        style.icon_row,
        rowFromFirstLevel && style.icon_row_firstLevel,
        disabled && style.icon_disabled
      )}
    >
      <span
        style={{ height: `${60 * lengthFromParent}px` }}
        className={style.icon_helper}
      ></span>
      <img
        src={rowIconSrc}
        alt={"Строка"}
        onClick={() => {
          !disabled &&
            createTableRow({
              type: "row",
              parent,
            });
        }}
      />
    </div>
  );
};

export default IconsByType;
