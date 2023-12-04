import React, { useState } from "react";
import { cn as bem } from '@bem-react/classname';
import './style.css'
import Controls from "../controls";
import PropTypes from "prop-types";

function Navigation({onModalBtnClick, navText}) {
  const cn = bem('Navigation')

  return (
    <div className={cn()}>
    <span className={cn('text')}>
        В корзине: <strong>{navText}</strong>
    </span>
    <Controls onModalBtnClick={onModalBtnClick} btnText='Перейти'/>
    </div>
  )
}

Navigation.propTypes = {
  onModalBtnClick: PropTypes.func,
  navText: PropTypes.string
}

Navigation.defaultProps = {
  onModalBtnClick: () => {}
}

export default React.memo(Navigation)