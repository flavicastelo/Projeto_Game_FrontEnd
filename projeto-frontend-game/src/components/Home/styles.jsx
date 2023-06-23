
import styled , { keyframes }from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5rem;
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
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem auto;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1583px) {
    gap: 7rem;
    }
    @media (min-width: 1680px) {
    gap: 9rem;
    }
`;
const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #808080;
  border-top-color: #13bcd3;
  border-radius: 50%;
  animation: ${loading} 1s infinite linear;
`;
export const ContainerGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: calc(100% - 10rem);
    gap: 0.5rem;
    margin: 0 auto;
    justify-content: space-evenly;
`;
