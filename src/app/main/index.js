import {memo, useCallback, useEffect, useState} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from '../../components/pagination';
import Loader from '../../components/my-loader';

function Main() {

  const store = useStore();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    store.actions.catalog.loadPages();
    setIsLoading(false);
  }, []);

  const select = useSelector(state => ({
    catalogData: state.catalog,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Загрузка товаров со страницы
    loadPages: useCallback((page) => store.actions.catalog.loadPages(page), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} path={`/item/${item._id}`}/>
    }, [callbacks.addToBasket]),
  };

  return (
        <PageLayout>
          <Head title = 'Магазин' />
          <BasketTool 
            onOpen={callbacks.openModalBasket} 
            amount={select.amount}
            sum={select.sum}
          />
          {
            isLoading 
            ?
            <Loader/>
            :
            <>
              <List list={select.catalogData.list} renderItem={renders.item} />
              <Pagination
                totalPages={select.catalogData.totalPages}
                page={select.catalogData.page}
                loadPages={callbacks.loadPages}
              />
            </>
          }
        </PageLayout >
  )
}

export default memo(Main);
