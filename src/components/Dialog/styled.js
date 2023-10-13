import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 50%;
  height: 30%;
  background: blue;
  opacity: 1;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  // justify-content: center;
  position: relative;
  border-radius: 5px;
  background: ${props => (props.src ? `url(${props.src})` : '')};
`;

export const Title = styled.div``;

export const Message = styled.div`
  padding-top: 7%;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid white;
  width: 30%;
  text-align: center;
  margin: 5px auto 10px;
`;
