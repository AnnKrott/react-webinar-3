import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      totalPages: 0,
      limit: 10,
      page: 1,
      isLoading: true
    }
  }

  async loadPages(page = 1) {
    const limit = this.initState().limit
    const response = await fetch(
      `/api/v1/articles?limit=${limit}&skip=${page * limit - limit}&fields=items(_id, title, price),count`
    );
    const json = await response.json();

    this.setState({
      ...this.getState(),
      list: json.result.items,
      totalPages: Math.ceil(json.result.count / limit),
      page: page,
      isLoading: false
    }, 'Загружены товары с определенной страницы')
    localStorage.setItem('page', this.getState().page)
  }
}

export default Catalog;
