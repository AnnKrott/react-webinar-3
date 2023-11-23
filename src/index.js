import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';

// export const randomNumber = () => {
//   const code = Math.round(Math.random()*100)
//   console.log(code);
// }


const store = new Store({
  list: [
    {code: Math.round(Math.random()*200), title: 'Название элемента', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Некий объект', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Заголовок', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Очень длинное название элемента из семи слов', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Запись', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Шестая запись', selectCounter: 0},
    {code: Math.round(Math.random()*200), title: 'Седьмая запись', selectCounter: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
