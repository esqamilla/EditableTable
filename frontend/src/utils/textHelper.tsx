import { Tooltip, Typography } from "antd";
import style from "styles/utils.module.scss";

const { Paragraph } = Typography;

export const hiddenTextWithTooltip = (text: string) => {
  return (
    <Tooltip placement="topLeft" title={text}>
      <Paragraph className={style.textWithTooltip} ellipsis>
        {text}
      </Paragraph>
    </Tooltip>
  );
};
