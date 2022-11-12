import { createContext, useEffect, useReducer, useState } from "react";
import { Auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsready: true };

    case "SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    authIsready: false,
    search: null,
  });
  console.log(state);

  useEffect(() => {
    const unsub = Auth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });

      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
