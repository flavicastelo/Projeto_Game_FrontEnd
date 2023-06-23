
import styled , { keyframes }from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #808080;
  border-radius: 10px;
  background-color: transparent;
  color: #808080;
  padding-left: 0.5rem;
  margin-bottom: 2rem;
  &:focus {
        outline: none;
        border-color: #13bcd3;
        box-shadow: 0 0 5px #13bcd3;
    }
`;

export const Icone = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2.4rem;
    right: 7.4rem;
`;

export const DivSearch = styled.div`
    position: "relative";

`