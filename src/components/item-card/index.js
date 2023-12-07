import { numberFormat } from '../../utils'
import Controls from '../controls'
import './style.css'

function ItemCard({itemData}) {

  return(
    <div className="ItemCard">
      <div>{itemData.description}</div>
      <div>Страна производитель: <strong>{itemData.country}</strong></div>
      <div>Категория: <strong>{itemData.category}</strong></div>
      <div>Год выпуска: <strong>{itemData.edition}</strong></div>
      <strong className='ItemCard-price'> Цена: {numberFormat(itemData.price)}</strong>
    </div>
  )
}

export default ItemCard