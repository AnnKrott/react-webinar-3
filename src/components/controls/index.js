import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onModalBtnClick, btnText}) {
  return (
    <span className='Controls'>
      <button onClick={() => onModalBtnClick(prev => !prev)}>{btnText}</button>
    </span>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
