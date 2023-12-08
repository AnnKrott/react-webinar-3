import { numberFormat } from '../../utils'
import './style.css'

function ItemCard({itemData, addToBasket}) {
  console.log(itemData.id);

  return(
    <>
      <div className="ItemCard">
        <div>{itemData.description}</div>
        <div>Страна производитель: <strong>{itemData.country} ({itemData.countryCode})</strong></div>
        <div>Категория: <strong>{itemData.category}</strong></div>
        <div>Год выпуска: <strong>{itemData.edition}</strong></div>
        <strong className='ItemCard-price'> Цена: {numberFormat(itemData.price)}</strong>
      </div>
      <button className='ItemCard-btn' onClick={() => addToBasket(itemData.id)}>Добавить</button>
    </>
  )
}

export default ItemCard