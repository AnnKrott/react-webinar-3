import {memo, useCallback, useEffect} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Nav from "../../components/nav";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from '../../components/pagination';

function Main() {

  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    catalogData: state.catalog,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    changePage: useCallback((page) => 
      store.actions.catalog.changePage(page), [store]
    )
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Head title='Магазин'/>
      
      <Nav 
        onOpen={callbacks.openModalBasket} 
        amount={select.amount}
        sum={select.sum}
      />
      <List list={select.catalogData.list} renderItem={renders.item}/>

      <Pagination 
        totalPages={select.catalogData.totalPages} 
        page={select.catalogData.page} 
        changePage={callbacks.changePage} 
      />

    </PageLayout>
  );
}

export default memo(Main);
