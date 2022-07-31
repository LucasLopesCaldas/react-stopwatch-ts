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
  padding: 5px 14px;
  border: 0;
  border-radius: 6px;
  background-color: #343434;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #434343;
  }
`;
