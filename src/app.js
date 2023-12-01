import React, {useCallback, useMemo, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Navigation from './components/navigation';
import Modal from './components/modal';
import { plural } from './utils';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const cartList = store.getState().cartList;
  const [isOpened, setIsOpened] = useState(false)

  const callbacks = {
    onDeleteFromCart: useCallback((code) => {
      store.deleteFromCart(code);
    }, [store]),

    onAddToCart: useCallback((item) => {
      store.addToCart(item);
    }, [store]),

    toggleModal: (state) => {
      setIsOpened(state)
    }
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>

      <Navigation 
        onModalBtnClick={callbacks.toggleModal} 
        navText={store.uniqueItems
          ? `${store.uniqueItems} ${plural(store.uniqueItems, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })}
            / 
            ${store.getTotalPrice()}\u00A0₽
           `
          : 'Пусто'
        }
      />

      <List 
        list={list}
        onClick={callbacks.onAddToCart}
        itemText='Добавить'
      />

      <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
        <Head title='Корзина'>
          <Controls onModalBtnClick={callbacks.toggleModal} btnText='Закрыть'/>
        </Head>
        <List
          list={cartList}
          onClick={callbacks.onDeleteFromCart}
          itemText='Удалить'
        />
        <div className="Modal-strong">
          <span>Итого:</span> 
          {`${store.getTotalPrice()}\u00A0₽`}
        </div>
      </Modal>

    </PageLayout>
  );
}

export default App;
