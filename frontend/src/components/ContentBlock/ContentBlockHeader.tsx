import React, {FC} from 'react';
import style from './ContentBlock.module.scss'

interface ContentBlockHeaderProps {

}

const ContentBlockHeader: FC<ContentBlockHeaderProps> = ({}) => {
  console.log(style)
  return (
    <div className={style.content_header}>
      <div className={style.content_header_item}>Строительно-монтажные работы</div>
    </div>
  );
};

export default ContentBlockHeader;