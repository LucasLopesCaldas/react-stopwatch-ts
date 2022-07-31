import styled from 'styled-components';

const MAX_SIZE = 350;

type PointerProp = {
  rotation?: number;
};

export const ClockContainer = styled.div`
  max-height: ${MAX_SIZE}px;
  z-index: -10;
`;

export const ClockImage = styled.img`
  max-width: ${MAX_SIZE}px;
  position: absolute;
  width: 100%;

`;

export const HourPointerImage = styled.img.attrs<PointerProp>(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)<PointerProp>`
  max-width: ${MAX_SIZE}px;
  position: absolute;
  width: 100%;
`;

export const MinPointerImage = styled.img.attrs(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)<PointerProp>`
  max-width: ${MAX_SIZE}px;
  position: absolute;
  width: 100%;
`;

export const SecPointerImage = styled.img.attrs(
  ({ rotation }: PointerProp) => ({
    style: {
      transform: `rotate(${rotation}deg)`,
    },
  })
)<PointerProp>`
  width: 100%;
  max-width: ${MAX_SIZE}px;
  left: 0;
  position: relative;
`;
