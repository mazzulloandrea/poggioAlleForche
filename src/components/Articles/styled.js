import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Article = styled.article`
  float: left;
  width: ${props => (props.mobilelayout ? '100%' : '50%')};
  height: 60vh;
`;

export const TextWrapper = styled.div`
  padding: 5%;
`;

export const Title = styled.p`
  margin-top: -5%;
  padding-bottom: 0;
  display: block;
  font-family: arial;
  font-size: 2em;
`;

export const SubTitle = styled.p`
  margin-top: -3%;
  padding-bottom: 5%;
  display: block;
  font-family: arial;
  font-size: 3em;
`;

export const Text = styled.p`
  font-family: arial;
  font-size: 1.2em;
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
