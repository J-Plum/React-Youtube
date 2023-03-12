import { createContext, useContext } from "react";
import mockData from "../service/mockYoutube";
import data from "../service/youtube";

export const ApiContext = createContext();

const youtube = new data();

export function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{ youtube }}>
      {children}
      </ApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(ApiContext);
}
