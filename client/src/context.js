import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";

const AppContext = createContext();
const initialState = {
  loading: false,
  success: false,
  items: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getItemsSuccess = (data) => {
    dispatch({ type: "GET_ITEMS_SUCCESS", payload: data });
  };

  const addItemSuccess = () => {
    dispatch({ type: "ADD_ITEM_SUCCESS" });
  };

  return (
    <AppContext.Provider value={{ ...state, getItemsSuccess, addItemSuccess }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
