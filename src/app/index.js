import {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../router/app-router'

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <AppRouter/>
      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
