import { Wrapper, Container, Title, Message, Actions } from './styled';

const Dialog = ({ onSuccess, src }) => {
  return (
    <Wrapper>
      <Container src={src}>
        <Title></Title>
        <Message>Entra in fullscreen ?</Message>
        <Actions onClick={() => onSuccess()}>OK</Actions>
      </Container>
    </Wrapper>
  );
};

export default Dialog;
