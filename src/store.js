import {formatNumber, generateCode, generateCode1} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = [];
    this.uniqueItems = 0; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
 * Установка состояния
 * @param itemClicked {Object}
 */
  updateCartState(itemClicked) {
    this.uniqueItems = this.uniqueItems + 1;
    this.state.list.map((item) => {
      if (item.code === itemClicked.code) {
        this.setState({
          ...this.state,
          cartList: [
            ...this.state.cartList,
            { code: generateCode1(), title: item.title, price: item.price, count: 1 }
          ]
        })
      }
    })
  }

  /**
   * Добавление нового товара в корзину
   * @param itemClicked {Object}
   *    */
  addToCart(itemClicked) {
    if (!this.state.cartList.length) {
      this.updateCartState(itemClicked)
    } else {

      const itemExist = this.state.cartList.find(cartItem => cartItem.title === itemClicked.title)
      if (itemExist) {
        this.setState({
          ...this.state,
          cartList: this.state.cartList.map(cartItem => {

            if (cartItem.title === itemClicked.title) {
              return {...cartItem, count: cartItem.count + 1}
            } else {
              return {...cartItem}
            }

          })
        })
      } else {
        this.updateCartState(itemClicked)
      }
    }
  };

  /**
 * Получение общей суммы товаров в корзине
 */
  getTotalPrice() {
    return formatNumber(this.state.cartList.reduce((sum, item) => sum + (item.price * item.count), 0))
  }

  /**
   * Удаление товара из корзины
   * @param itemClicked {Object}
   */
  deleteFromCart(itemClicked) {
    this.uniqueItems = this.uniqueItems - 1;
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cartList: this.state.cartList.filter(item => item.title !== itemClicked.title)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? {...item, selected: false} : item;
      })
    })
  }
}

export default Store;
