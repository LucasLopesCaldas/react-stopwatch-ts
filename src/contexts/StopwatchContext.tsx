import { createContext, ReactNode, useState } from 'react';

const initialState = {
  maxMillisec: 0,
  setMaxMillisec() {},
  setRunning() {},
  running: false
};

type values = {
  maxMillisec: number;
  setMaxMillisec: (millisec: number) => void;
  setRunning: (millisec: boolean) => void;
  running: boolean;
}

export const StopwatchContext = createContext<values>(initialState);

type props = {
  children: ReactNode;
};

export function StopwatchProvider({ children }: props) {
  const [maxMillisec, setMaxMillisec] = useState(initialState.maxMillisec);
  const [running, setRunning] = useState(initialState.running);
  
  const value = {
    maxMillisec,
    setMaxMillisec,
    running,
    setRunning
  };

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
}
