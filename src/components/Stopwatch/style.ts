import styled from 'styled-components';

export const StopwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StopwatchButtonPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
`;

export const StopwatchButton = styled.button`
  padding: 10px 28px;
  margin-top: -50px;
  border: 0;
  border-radius: 10px;
  color: white;
  font-size: 1.5em;
  border: 1px solid #373737;
  background-color: #191919;
  cursor: pointer;
  box-shadow: 0px 0px 10px 8px #00000033;

  &:hover {
    background-color: #434343;
  }

  &:disabled {
    background-color: #2b2b2b00;
    cursor: auto;
  }
`;
