import './style.css'
import React from 'react';
import PropTypes from "prop-types";
function Modal({ children, isOpened }) {

  console.log('modal is rendered');

  const onContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={isOpened ? 'Modal Modal-opened' : 'Modal'}>
      <div className='Modal-overlay'>
        <div className='Modal-content' onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  )
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool
}

export default React.memo(Modal)


