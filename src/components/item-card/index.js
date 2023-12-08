import { memo } from 'react'
import { numberFormat } from '../../utils'
import PropTypes from "prop-types";
import './style.css'
function ItemCard({itemData, addToBasket}) {

  return(
    <>
      <div className="ItemCard">
        <div>{itemData.description}</div>
        <div>Страна производитель: <strong>{itemData.country} ({itemData.countryCode})</strong></div>
        <div>Категория: <strong>{itemData.category}</strong></div>
        <div>Год выпуска: <strong>{itemData.edition}</strong></div>
        <strong className='ItemCard-price'> Цена: {numberFormat(itemData.price)} ₽</strong>
      </div>
      <button className='ItemCard-btn' onClick={() => addToBasket(itemData.id)}>Добавить</button>
    </>
  )
}

ItemCard.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    country: PropTypes.string,
    countryCode: PropTypes.string,
    category: PropTypes.string,
    edition: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
};

ItemCard.defaultProps = {
  addToBasket: () => { },
}

export default memo(ItemCard)