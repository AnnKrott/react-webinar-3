import ItemPage from "../app/item-page";
import Main from "../app/main";

export const routes = [
  { path: '/', elem: <Main/>},
  { path: '/:id', elem: <ItemPage/>}
]