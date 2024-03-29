import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 45px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px){
    padding: 70px 45px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 12px;

  @media(max-width: 1000px){
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 16px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575; 
  margin:0 0 30px; 
`;

export const Text = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;