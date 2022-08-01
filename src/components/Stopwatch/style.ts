import styled from 'styled-components';

export const StopwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StopwatchButtonPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
`;

export const StopwatchButton = styled.button`
  padding: 10px 20px;
  border: 0;
  margin-top: -50px;
  border-radius: 10px;
  background-color: #343434;
  color: white;
  font-size: 2em;
  font-family: monospace;
  cursor: pointer;

  &:hover {
    background-color: #434343;
  }
`;
