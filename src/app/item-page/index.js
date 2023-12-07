import { useCallback, useEffect } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Nav from "../../components/nav";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router";
import Controls from "../../components/controls";
import ItemCard from "../../components/item-card";

function ItemPage(props) {

  const store = useStore()

  const params = useParams()

  const item = useSelector(state => ({
    list: state.itemPage.list
  }));

  const callbacks = {
  }

  useEffect(() => {
    store.actions.itemPage.getItemById(params.id)
  }, [])

    return (
      <PageLayout>
        <Head title={item.list.title}/>
        <Nav/>
        <ItemCard itemData={item.list}/>
        <Controls/> 
      </PageLayout>
    )
}

export default ItemPage