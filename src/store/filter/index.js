import StoreModule from "../module";

class ModalsState extends StoreModule {

  initState() {
    return {
      categories: [
      ]
    }
  }

  getElements(array, res, compareElement, level = 1) {
    array.forEach(element => {
      if (element.parent && element.parent?._id === compareElement) {
        res.push({value: element._id, title: '- '.repeat(level) + element.title})
        return [...res, this.getElements(array, res, element._id, level + 1)]
      } else {
        return ''
      }
    })
  }    

   async fetchFilterCategories() {
    const response = await fetch('/api/v1/categories?fields=_id,title,parent(_id)&limit=*')
    const json = await response.json()
    let res = []
              
    json.result.items.map((category) => {
      if (!category.parent) {
        res.push({ value: category._id, title: category.title })
        this.getElements(json.result.items, res, category._id)
      }
      return res
    })
    console.log(res);

    this.setState({
      ...this.getState(),
      categories: [{value: '', title: 'Все'}, ...res]
    }, 'Загружены категории сортировки');
  }
}

export default ModalsState;
