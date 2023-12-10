import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemPage from './item-page';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/item/:id' element={<ItemPage />} />
      </Routes>
      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
