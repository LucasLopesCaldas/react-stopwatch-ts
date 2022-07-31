import { createContext, ReactNode, useState } from 'react';

const initialState = {
  maxMillisec: 3,
  setMaxMillisec() {},
};

type values = {
  maxMillisec: number;
  setMaxMillisec: (millisec: number) => void;
}

export const StopwatchContext = createContext<values>(initialState);

type props = {
  children: ReactNode;
};

export function StopwatchProvider({ children }: props) {
  const [maxMillisec, setMaxMillisec] = useState(initialState.maxMillisec);

  const value = {
    maxMillisec,
    setMaxMillisec,
  };

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
}
