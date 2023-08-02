import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Article = styled.article`
  width: calc(50% - 6vw);
  float: left;
  width: 50%;
`;

export const Title = styled.p`
  padding: 2%;
  display: block;
  font-family: arial;
  font-size: 5em;
`;

export const Text = styled.p`
  padding: 2%;
  font-family: arial;
  font-size: 3em;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 100%;
`;
