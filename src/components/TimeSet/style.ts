import styled from 'styled-components';

export const TimeSetInput = styled.input`
  font-family: clock;
  font-size: 1.4em;
  margin: 20px 10px;
  padding: 10px 5px;
  width: 3.2em;
  height: 1.6em;
  color: white;
  border: 1px solid #373737;
  border-radius: 6px;
  background-color: #191919;
  box-shadow: 0px 0px 10px 8px #00000033;
  
`;

export const TimeSetRoundButton = styled.button`
  font-size: 1.4em;
  margin: 20px 10px;
  margin-right: -1.8em;
  width: 1.8em;
  height: 1.8em;
  color: white;
  padding: 5px;
  border: 1px solid #373737;
  border-radius: 100%;
  background-color: #191919;
  box-shadow: 0px 0px 10px 8px #00000033;
  

  &:hover {
    background-color: #434343;
  }
`;
