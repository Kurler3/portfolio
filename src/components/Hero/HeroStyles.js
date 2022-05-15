import styled, {keyframes} from 'styled-components';


export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`


export const ProfileImg = styled.div`

  image-rendering: auto;
  border-radius: 10px;
  min-width: 300px;
  max-width: 350px;
  min-height: 300px;
  width: 60%;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 3px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    z-index: -1;
    width: calc(100% + 3px * 2);
    height: calc(100% + 3px * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * 3px);
    animation: ${moveGradient} 4s alternate infinite;
  }
`;