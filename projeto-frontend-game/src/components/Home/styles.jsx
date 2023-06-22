
import styled from "styled-components";

export const Container = styled.div`
    
`;


export const Main = styled.main`
    display: flex;
    flex-direction: row;
`;
export const Body = styled.body`
  background-image: radial-gradient(circle, #050505, #131313);
  width: 100%;
  min-height: 100vh;
  
`;
export const SectionHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  align-self: center;
`;

export const Div = styled.div`
    background-image: linear-gradient(to top, #050505, #131313, #1d1d1d, #262626, #303030);
    display: flex;
    width: 3.8rem;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const TitleHome = styled.h1`
  margin-bottom: 4rem;
  color: #13bcd3;
  border-bottom: 2px solid #313333;
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 7rem;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
 
`