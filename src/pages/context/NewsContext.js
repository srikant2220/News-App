import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");

  return (
    <NewsContext.Provider value={{ category, setCategory }}>
      {children}
    </NewsContext.Provider>
  );
};
export default NewsContext;
