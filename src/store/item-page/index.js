import StoreModule from "../module";

class ItemPage extends StoreModule {

  initState() {
    return {
      list: {
        id: '',
        title: '',
        description: '',
        country: '',
        countryCode: '',
        category: '',
        edition: 0,
        price: 0,
      }
    }
  }

  getItemById(id) {
    fetch(`/api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`)
    .then(response => response.json())
    .then(data => {
      const item = data.result;
      this.setState({
        ...this.getState(),
          list: {
          id: item._id,
          title: item.title,
          description: item.description,
          country: item.madeIn.title,
          countryCode: item.madeIn.code,
          category: item.category.title,
          edition: item.edition,
          price: item.price
        }
      }, 'Получены данные товара')
    })
  }
}

export default ItemPage;
