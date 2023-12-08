import { memo, useCallback, useEffect, useState } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Nav from "../../components/nav";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router";
import ItemCard from "../../components/item-card";
import Loader from "../../components/my-loader";

function ItemPage() {

  const store = useStore()
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()

  const item = useSelector(state => ({
    list: state.itemPage.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  useEffect(() => {
    store.actions.itemPage.getItemById(params.id)
    const page = Number(localStorage.getItem('page'))
    store.actions.catalog.loadPages(page)
    setIsLoading(false)
  }, [params.id])

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    addToBasket: useCallback(id => store.actions.basket.addToBasket(id), [store]),
  }

  return (
    <PageLayout>
      {
        isLoading 
        ?
        <Loader/>
        :
        <>
          <Head title={item.list.title} />
          <Nav sum={item.sum} amount={item.amount} onOpen={callbacks.openModalBasket} />
          <ItemCard itemData={item.list} addToBasket={callbacks.addToBasket} />
        </>
      }
    </PageLayout>
  )
}

export default memo(ItemPage)