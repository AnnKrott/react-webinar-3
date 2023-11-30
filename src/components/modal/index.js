import { cn as bem } from '@bem-react/classname';
import './style.css'
import React from 'react';

function Modal({ children, setIsOpened, isOpened }) {

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

export default React.memo(Modal)


