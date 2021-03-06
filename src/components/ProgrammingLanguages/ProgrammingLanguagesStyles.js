import styled, {keyframes} from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

const slideFromTop = keyframes`
    from {
        opacity: .3;
        margin-top: -10px;
    };

    to {
        opacity: 1;
        margin-top: 0px;
    };
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease;

  animation-name: slideFromTop;
  animation-duration: 200ms;
  animation-iteration-count: 1;

  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  /* line-height: 40px; */
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const ShowMore = styled.p`
    width: fit-content;
    margin: 0 auto;
    padding: 12px;
    font-size: 26px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #FFFFFF;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 20px;
    transition: 0.2s all ease;

    &:hover {
        color:#4ac1d9;
        border-color: #4ac1d9;
        transform: scale(1.1);
    }
`





export const BoxIcon = styled.p`
    margin-top: 10px;
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`


