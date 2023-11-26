const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Получить правильную форму слова "раз"
 * @param number {Number}
 * @returns string
 */
export function getCorrectPluralForm(number) {
  const pluralRules = new Intl.PluralRules('ru')
  const rule = pluralRules.select(number)
  const suffixes = new Map([
    ['one', 'раз'],
    ['few', 'раза'],
    ['many', 'раз']
  ])
  const suffix = suffixes.get(rule)
  return `${number} ${suffix}`
}
