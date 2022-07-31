import styled from 'styled-components';

const MAX_SIZE = 400;

type PointerProp = {
  rotation?: number;
};

export const ClockContainer = styled.div`
  max-height: ${MAX_SIZE}px;
`;

export const ClockImage = styled.img`
  width: 100%;
  max-width: ${MAX_SIZE}px;
`;

export const HourPointerImage = styled.img.attrs(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)`
  max-width: ${MAX_SIZE}px;
  position: absolute;
  left: 0;
  width: 100%;
`;

export const MinPointerImage = styled.img.attrs(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)`
  max-width: ${MAX_SIZE}px;
  position: absolute;
  left: 0;
  width: 100%;
`;

export const SecPointerImage = styled.img.attrs(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)`
  width: 100%;
  max-width: ${MAX_SIZE}px;
  left: 0;
  position: absolute;
`;
