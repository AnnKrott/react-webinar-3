import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Navigation from './components/navigation';
import Modal from './components/modal';

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

    onAddToCart: useCallback((code) => {
      store.addToCart(code);
    }, [store]),

  }

  const toggleModal = (state) => {
    setIsOpened(state)
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Navigation onModalBtnClick={toggleModal}/>
      <List 
        list={list}
        onClick={callbacks.onAddToCart}
        itemText='Добавить'
      />

      <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
        <Head title='Корзина'>
          <Controls onModalBtnClick={toggleModal} btnText='Закрыть'/>
        </Head>
        <List
          list={cartList}
          onClick={callbacks.onDeleteFromCart}
          itemText='Удалить'
        />
      </Modal>
    </PageLayout>
  );
}

export default App;
