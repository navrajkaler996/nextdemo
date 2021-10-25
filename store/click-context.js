import { createContext, useState } from "react";

const ClickContext = createContext({
  value: 0,
  incrementValue: function (value) {},
});

export const ClickContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const incrementHandler = (countValue) => {
    setCount(countValue);
  };

  return (
    <ClickContext.Provider
      value={{ value: count, incrementValue: incrementHandler }}
    >
      {props.children}
    </ClickContext.Provider>
  );
};

export default ClickContext;
