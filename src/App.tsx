import { Route, Routes } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import { StopwatchProvider } from './contexts/StopwatchContext';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <StopwatchProvider>
            <Stopwatch />
          </StopwatchProvider>
        }
      />
    </Routes>
  );
}
