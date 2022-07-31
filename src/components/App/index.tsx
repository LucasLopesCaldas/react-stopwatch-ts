import { Route, Routes } from 'react-router-dom';
import { StopwatchProvider } from '../../contexts/StopwatchContext';
import Stopwatch from '../Stopwatch';
import * as S from './style';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <S.AppContainer>
            <StopwatchProvider>
              <Stopwatch />
            </StopwatchProvider>
          </S.AppContainer>
        }
      />
    </Routes>
  );
}
