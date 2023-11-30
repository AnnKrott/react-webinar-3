import React, { useState } from "react";
import { cn as bem } from '@bem-react/classname';
import './style.css'
import Modal from "../modal";
import Controls from "../controls";

function Navigation({onModalBtnClick}) {
  const cn = bem('Navigation')

  return (
    <div className={cn()}>
    <span className={cn('text')}>
        В корзине: <strong className={cn('strong')}>пусто</strong>
    </span>
    <Controls onModalBtnClick={onModalBtnClick} btnText='Перейти'/>
    </div>
  )
}

export default React.memo(Navigation)