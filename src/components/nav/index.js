import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import './style.css';
import { Link } from "react-router-dom";

function Nav({sum, amount, onOpen}) {
  const cn = bem('Nav');
  return (
    <div className={cn()}>

      <Link className={cn('link')} to='/'>Главная</Link>

      <div className={cn('basket')}>
        <span className={cn('label')}>В корзине:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })} / ${numberFormat(sum)} ₽`
            : `пусто`
          }
        </span>
        <button onClick={onOpen}>Перейти</button>       
      </div>

    </div>
  );
}

Nav.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

Nav.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default memo(Nav);
