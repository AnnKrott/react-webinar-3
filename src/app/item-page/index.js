import { useCallback, useEffect } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Nav from "../../components/nav";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router";
import ItemCard from "../../components/item-card";

function ItemPage(props) {

  const store = useStore()

  const params = useParams()

  const item = useSelector(state => ({
    list: state.itemPage.list,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    addToBasket: useCallback(id => store.actions.basket.addToBasket(id), [store]),
  }

  useEffect(() => {
    store.actions.catalog.load()
    store.actions.itemPage.getItemById(params.id)
  }, [])

    return (
      <PageLayout>
        <Head title={item.list.title}/>
        <Nav sum={item.sum} amount={item.amount} onOpen={callbacks.openModalBasket}/>
        <ItemCard itemData={item.list} addToBasket={callbacks.addToBasket} />
      </PageLayout>
    )
}

export default ItemPage