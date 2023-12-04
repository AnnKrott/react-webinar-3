import Controls from "../controls";
import Head from "../head";
import List from "../list";
import React from "react";
import Modal from "../modal";

import './style.css'

function Cart(props) {
  return (
    <>
      <Head title='Корзина'>
        <Controls onModalBtnClick={props.onModalBtnClick} btnText='Закрыть' />
      </Head>
      <List
        list={props.list}
        onClick={props.onClick}
        itemText='Удалить'
      />
      <div className="Cart-strong">
        <span>Итого:</span>
        {props.totalPrice}
      </div>
    </>
  )
}

export default React.memo(Cart)