import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Article = styled.article`
  // width: calc(50% - 6vw);
  float: left;
  width: ${props => (props.mobilelayout ? '100%' : '50%')};
  height: 900px;
`;

export const Title = styled.p`
  padding: 2%;
  display: block;
  font-family: arial;
  font-size: 5em;
`;

export const SubTitle = styled.p`
  padding: 2%;
  display: block;
  font-family: arial;
  font-size: 5em;
`;

export const Text = styled.p`
  padding: 2%;
  font-family: arial;
  font-size: 2em;
  flex-wrap: wrap;
`;

export const ImgBkg = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
