import React, { createContext, useReducer } from "react";
import users from "../data/users";

const initialState = { users };
const UsersContext = createContext({});

export const UsersProvider = (props) => {
  const reducer = (state, action) => {
    const user = action.payload;

    switch (action.type) {
      case "createUser":
        user.id = Math.floor(Math.random());

        return {
          ...state,
          users: [...state.users, user],
        };

      case "deleteUser":
        return {
          ...state,
          users: state.users.filter((u) => u.id !== user.id),
        };

      case "updateUser":
        return {
          ...state,
          users: state.users.map((u) => (u.id === user.id ? user : u)),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
